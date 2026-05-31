const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function showAgreementPopup() {
  const agreementKey = "vedadiAgreementAcceptedV2";

  if (localStorage.getItem(agreementKey) === "true") {
    return;
  }

  const overlay = document.createElement("div");
  overlay.className = "agreement-modal";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-labelledby", "agreementTitle");
  overlay.innerHTML = `
    <div class="agreement-dialog">
      <p class="eyebrow">User agreement</p>
      <h2 id="agreementTitle">Before entering Vedadi Legal</h2>
      <p>Information on this website is for general awareness only and does not create an advocate-client relationship. Do not submit confidential details until Vedadi Legal formally accepts your matter.</p>
      <p>By selecting Agree, you accept these website terms and consent to being contacted about submitted requests.</p>
      <div class="agreement-actions">
        <button class="button secondary" type="button" data-disagree>Disagree</button>
        <button class="button primary" type="button" data-agree>Agree</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.classList.add("modal-open");

  overlay.querySelector("[data-agree]").addEventListener("click", () => {
    localStorage.setItem(agreementKey, "true");
    overlay.remove();
    document.body.classList.remove("modal-open");
  });

  overlay.querySelector("[data-disagree]").addEventListener("click", () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.href = "about:blank";
  });
}

showAgreementPopup();

function buildThankYouEmail(name) {
  const displayName = name ? ` ${name}` : "";
  return `Dear${displayName},

Thank you for signing up with Vedadi Legal.

We have received your request to receive updates from our team. You will hear from us with practical legal notes, service updates, and consultation information.

Regards,
Vedadi Legal`;
}

async function submitSignup(form) {
  const status = form.querySelector("[data-form-status]");
  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();

  if (!email) {
    status.textContent = "Please enter a valid email address.";
    return;
  }

  status.textContent = "Sending your thank-you email...";

  try {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    });

    if (!response.ok) {
      throw new Error("Signup endpoint failed");
    }

    const result = await response.json();
    status.textContent = result.emailSent
      ? "Signed up. A thank-you email has been sent."
      : "Signed up. Add SMTP settings on the server to send the thank-you email.";
    form.reset();
  } catch (error) {
    localStorage.setItem("vedadiLastSignup", JSON.stringify({
      name,
      email,
      message: buildThankYouEmail(name),
      date: new Date().toISOString()
    }));
    status.textContent = "Signed up locally. Run the Node server with SMTP settings to send email automatically.";
  }
}

document.querySelectorAll("[data-signup-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitSignup(form);
  });
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = contactForm.querySelector("[data-contact-status]");
    status.textContent = "Thank you. Your request is ready. Please email hello@vedadilegal.com or use WhatsApp for fastest routing.";
    contactForm.reset();
  });
}
