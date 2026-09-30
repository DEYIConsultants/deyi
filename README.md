# DEYI Consultants

A Next.js website for an Irvine-based structural engineering practice. All service copy is scoped to structural engineering, structural evaluations, construction-phase structural support, and permit application assistance.

## Development

Use Node.js 22.13 or newer (the validation tests use built-in TypeScript stripping).

```sh
npm ci
npm run dev
npm run lint
npm test
npm run build
```

## Configuration

Set these in a local `.env` file or the deployment environment. Never commit credentials.

- `NEXT_PUBLIC_APPOINTMENT_URL`: an HTTPS Calendly booking URL. The existing `NEXT_PUBLIC_APPOITMENT_URL` spelling remains supported for compatibility. A missing or invalid URL displays a contact fallback.
- `EMAIL_USER`: the Gmail account used to send contact inquiries.
- `EMAIL_PASS`: its SMTP/app password.
- `RECEIVER_EMAIL`: the DEYI inbox that receives inquiries.

The form validates required fields and sends plain-text email with the visitor as the reply-to contact. Delivery failures preserve the visitor’s inputs and show direct contact information. Validate real email delivery separately using an authorized test inquiry before publishing.

## Content and assets

- `lib/site.ts`: company contact details, structural services, process steps, and FAQs.
- `app/`: home, services, about, process, contact, and booking pages.
- `components/public/`: shared navigation, footer, contact options, and forms.
- `app/globals.css`: responsive visual system.
- `public/images/structural-site.webp`: optimized derivative of the existing construction photo; the original asset is preserved. The photo is illustrative and is not presented as a verified DEYI case study.

The former incomplete chat integration is replaced with direct contact options. Its old POST endpoints return HTTP 410 and do not call any external AI service.

Only publish verified project, team, credential, and testimonial details. Permit assistance describes support for the structural scope; permit approval and review timing are determined by the local authority.
