const http = require("http");
const fs = require("fs");
const path = require("path");
const tls = require("tls");

const root = __dirname;
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        request.destroy();
        reject(new Error("Request body too large"));
      }
    });
    request.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });
}

function smtpCommand(socket, command, expectedPrefix) {
  return new Promise((resolve, reject) => {
    const onData = (data) => {
      const text = data.toString();
      if (text.startsWith(expectedPrefix)) {
        socket.off("data", onData);
        resolve(text);
      } else if (/^[45]\d\d/.test(text)) {
        socket.off("data", onData);
        reject(new Error(text.trim()));
      }
    };
    socket.on("data", onData);
    if (command) {
      socket.write(`${command}\r\n`);
    }
  });
}

function encodeBase64(value) {
  return Buffer.from(String(value), "utf8").toString("base64");
}

async function sendThankYouEmail({ name, email }) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;
  const smtpPort = Number(process.env.SMTP_PORT || 465);

  if (!host || !user || !pass || !from) {
    console.log(`Signup received for ${email}. SMTP settings are missing, so email was not sent.`);
    return false;
  }

  const displayName = name ? ` ${name}` : "";
  const subject = "Thank you for signing up with Vedadi Legal";
  const body = `Dear${displayName},

Thank you for signing up with Vedadi Legal.

We have received your request to receive updates from our team. You will hear from us with practical legal notes, service updates, and consultation information.

Regards,
Vedadi Legal`;

  const message = [
    `From: Vedadi Legal <${from}>`,
    `To: ${email}`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
    "",
    body
  ].join("\r\n");

  const socket = tls.connect(smtpPort, host, { servername: host });

  await smtpCommand(socket, null, "220");
  await smtpCommand(socket, "EHLO vedadilegal.com", "250");
  await smtpCommand(socket, "AUTH LOGIN", "334");
  await smtpCommand(socket, encodeBase64(user), "334");
  await smtpCommand(socket, encodeBase64(pass), "235");
  await smtpCommand(socket, `MAIL FROM:<${from}>`, "250");
  await smtpCommand(socket, `RCPT TO:<${email}>`, "250");
  await smtpCommand(socket, "DATA", "354");
  await smtpCommand(socket, `${message}\r\n.`, "250");
  await smtpCommand(socket, "QUIT", "221");
  socket.end();
  return true;
}

function serveStatic(request, response) {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const pathname = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
  const requestedPath = path.normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, requestedPath);

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream"
    });
    response.end(data);
  });
}

const server = http.createServer(async (request, response) => {
  if (request.method === "POST" && request.url === "/api/signup") {
    try {
      const body = await readJsonBody(request);
      const email = String(body.email || "").trim();
      const name = String(body.name || "").trim();

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        response.writeHead(400, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ error: "Valid email is required" }));
        return;
      }

      const emailSent = await sendThankYouEmail({ name, email });
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ ok: true, emailSent }));
    } catch (error) {
      response.writeHead(500, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "Unable to process signup" }));
    }
    return;
  }

  if (request.method === "GET") {
    serveStatic(request, response);
    return;
  }

  response.writeHead(405);
  response.end("Method not allowed");
});

server.listen(port, () => {
  console.log(`Vedadi Legal website running at http://localhost:${port}`);
});
