# Vedadi Legal Website

Responsive static website for Vedadi Legal with:

- Landing home page with user agreement
- About Us, Services, People, Contact Us, and Insight pages
- WhatsApp contact button
- Signup forms with thank-you email support
- No third-party build dependencies

## Run Locally

```powershell
npm start
```

Then open:

```text
http://localhost:3000
```

## Thank-You Email Setup

The signup form posts to `/api/signup`. It sends a thank-you email when SMTP environment variables are configured:

```powershell
$env:SMTP_HOST="smtp.example.com"
$env:SMTP_PORT="465"
$env:SMTP_USER="your-smtp-user"
$env:SMTP_PASS="your-smtp-password"
$env:SMTP_FROM="hello@vedadilegal.com"
npm start
```

If SMTP settings are not provided, the signup still works locally and the server logs the signup, but no real email is sent.

## Update Contact Details

Change these placeholders before publishing:

- `hello@vedadilegal.com`
- `+91 98765 43210`
- `https://wa.me/919876543210`
