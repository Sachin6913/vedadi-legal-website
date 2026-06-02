# Vedadi Legal Next.js Website

Light/gold law firm website built with:

- Next.js 14 App Router
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Resend email API

## Run Locally

```powershell
npm.cmd install
npm.cmd run dev
```

Open:

```text
http://localhost:3000
```

## Environment Variables

`.env.local` is already created with placeholders:

```text
RESEND_API_KEY=your_resend_key
RESEND_FROM_EMAIL=Vedadi Legal <consultations@your-verified-domain.com>
CONSULTATION_EMAIL_TO=consultations@vedadilegal.com
```

Replace the placeholder Resend values with real keys to enable:

- consultation request emails from `/api/send-consultation-email`

For consultation emails, `RESEND_FROM_EMAIL` must use a sender/domain verified in Resend, and
`CONSULTATION_EMAIL_TO` must be the real inbox that should receive consultation requests. The
consultation API intentionally returns a configuration error while these values are unset or still
using defaults.

Authentication has been removed from the site. `/sign-in`, `/sign-up`, and `/welcome` redirect to
the home page.

## Verify

```powershell
npm.cmd run build
```

## Main Pages

- `/`
- `/about`
- `/services`
- `/people`
- `/insight`
- `/contact`
