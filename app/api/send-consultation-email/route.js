import { Resend } from "resend";

const requiredFields = ["name", "email", "phone", "office", "area", "preferredDate", "message"];
const placeholderValues = new Set([
  "your_resend_key",
  "Vedadi Legal <onboarding@resend.dev>"
]);

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function clean(value) {
  return String(value || "").trim();
}

function isMissingConfig(value) {
  return !value || placeholderValues.has(value);
}

function publicError(message, status) {
  return Response.json({ error: message }, { status });
}

function createRequestId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export async function POST(request) {
  const requestId = createRequestId();

  try {
    let body;

    try {
      body = await request.json();
    } catch (error) {
      console.error("[consultation-email] Invalid JSON payload", { requestId, error });
      return publicError("Invalid request payload.", 400);
    }

    const data = Object.fromEntries(requiredFields.map((field) => [field, clean(body[field])]));
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      console.warn("[consultation-email] Missing required fields", { requestId, missingFields });
      return publicError(`Missing required field(s): ${missingFields.join(", ")}`, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      console.warn("[consultation-email] Invalid email address", { requestId });
      return publicError("A valid email address is required.", 400);
    }

    const apiKey = clean(process.env.RESEND_API_KEY);
    const to = clean(process.env.CONSULTATION_EMAIL_TO);
    const from = clean(process.env.RESEND_FROM_EMAIL);
    const missingConfig = [];

    if (isMissingConfig(apiKey)) missingConfig.push("RESEND_API_KEY");
    if (isMissingConfig(to)) missingConfig.push("CONSULTATION_EMAIL_TO");
    if (isMissingConfig(from)) missingConfig.push("RESEND_FROM_EMAIL");

    if (missingConfig.length > 0) {
      console.error("[consultation-email] Email configuration is missing or still using defaults", {
        requestId,
        missingConfig
      });
      return publicError("Email is not configured. Please contact the site administrator.", 503);
    }

    const resend = new Resend(apiKey);

    console.info("[consultation-email] Sending consultation request", {
      requestId,
      to,
      office: data.office,
      area: data.area
    });

    const { data: emailResult, error: emailError } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `New Consultation Request - ${data.area}`,
      html: `
        <div style="margin:0;background:#0A0A0A;padding:40px 20px;font-family:Inter,Arial,sans-serif;color:#FFFFFF;">
          <div style="max-width:680px;margin:0 auto;border:1px solid rgba(201,168,76,0.35);background:#111111;padding:36px;">
            <div style="font-family:Georgia,serif;font-size:26px;letter-spacing:4px;color:#C9A84C;text-transform:uppercase;">Vedadi Legal</div>
            <h1 style="font-family:Georgia,serif;font-size:32px;color:#FFFFFF;margin:28px 0 18px;">New Consultation Request</h1>
            <table style="width:100%;border-collapse:collapse;color:#D8D8D8;font-size:15px;line-height:1.65;">
              <tr><td style="padding:10px 0;color:#C9A84C;width:160px;">Name</td><td>${escapeHtml(data.name)}</td></tr>
              <tr><td style="padding:10px 0;color:#C9A84C;">Email</td><td>${escapeHtml(data.email)}</td></tr>
              <tr><td style="padding:10px 0;color:#C9A84C;">Phone</td><td>${escapeHtml(data.phone)}</td></tr>
              <tr><td style="padding:10px 0;color:#C9A84C;">Office</td><td>${escapeHtml(data.office)}</td></tr>
              <tr><td style="padding:10px 0;color:#C9A84C;">Practice Area</td><td>${escapeHtml(data.area)}</td></tr>
              <tr><td style="padding:10px 0;color:#C9A84C;">Preferred Date</td><td>${escapeHtml(data.preferredDate)}</td></tr>
            </table>
            <div style="margin-top:26px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.12);">
              <div style="color:#C9A84C;margin-bottom:8px;">Message</div>
              <div style="white-space:pre-wrap;color:#D8D8D8;line-height:1.7;">${escapeHtml(data.message)}</div>
            </div>
          </div>
        </div>
      `
    });

    if (emailError) {
      console.error("[consultation-email] Resend rejected consultation email", {
        requestId,
        name: emailError.name,
        message: emailError.message
      });
      return publicError("Unable to send consultation email. Please try again later.", 502);
    }

    console.info("[consultation-email] Consultation email accepted", {
      requestId,
      emailId: emailResult?.id
    });

    return Response.json({ ok: true, emailSent: true, id: emailResult?.id });
  } catch (error) {
    console.error("[consultation-email] Unexpected failure", { requestId, error });
    return publicError("Unable to send consultation email. Please try again later.", 500);
  }
}
