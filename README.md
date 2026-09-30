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

## Search indexing

The canonical origin is `https://www.deyiconsultants.com`. Each public page
declares its own canonical URL; contact query parameters resolve to `/contact`.
Requests to the apex domain permanently redirect to the same path on `www`,
preserving query parameters. Keep the Vercel Domains configuration consistent:
the `www` domain must serve the site and must not redirect back to the apex.

`npm run build` runs `next-sitemap` automatically through the `postbuild` script.
It discovers prerendered pages from the Next.js build, explicitly includes the
dynamically rendered `/contact` page, excludes API routes, and generates
`public/sitemap.xml`, its child sitemap, and `public/robots.txt` using the same
canonical origin. These generated files are ignored by Git; do not edit them
manually. Use `npm run build` as the deployment build command (not `next build`
alone), so sitemap generation also runs. Run it once before inspecting these
files during local development.

Sitemap entries intentionally omit `lastmod`, `changefreq`, and `priority`.
Deployment time is not a reliable content modification date. Add `lastmod` only
when accurate per-page modification dates are available.

After deployment, confirm that the sitemap contains the six public pages and
submit `https://www.deyiconsultants.com/sitemap.xml` in Google Search Console.
The existing submitted sitemap address stays unchanged. In URL Inspection,
check the rendered canonical and request indexing for changed pages if needed.

## Configuration

Set these in a local `.env` file or the deployment environment. Never commit credentials.

- `NEXT_PUBLIC_APPOINTMENT_URL`: an HTTPS Calendly booking URL. The existing `NEXT_PUBLIC_APPOITMENT_URL` spelling remains supported for compatibility. A missing or invalid URL displays a contact fallback.
- `EMAIL_USER`: the Gmail account used to send contact inquiries.
- `EMAIL_PASS`: its SMTP/app password.
- `RECEIVER_EMAIL`: the DEYI inbox that receives inquiries.

The form validates required fields and sends plain-text email with the visitor as the reply-to contact. Delivery failures preserve the visitor’s inputs and show direct contact information. Validate real email delivery separately using an authorized test inquiry before publishing.

## Copyright year

The footer displays `2016–current year` using the server’s UTC year. The root
layout revalidates prerendered pages every 24 hours, allowing the year to advance
without a new deployment. On a cached page, the first request after expiry can
serve the previous version while regeneration happens in the background. The
copyright span uses `data-nosnippet` to keep boilerplate out of Google search
snippets after Google recrawls the page.

## Content and assets

- `lib/site.ts`: company contact details, structural services, process steps, and FAQs.
- `app/`: home, services, about, process, contact, and booking pages.
- `components/public/`: shared navigation, footer, contact options, and forms.
- `app/globals.css`: responsive visual system.
- `public/images/structural-site.webp`: optimized derivative of the existing construction photo; the original asset is preserved. The photo is illustrative and is not presented as a verified DEYI case study.
- `public/favicon.png`: the supplied square DEYI logo, used unchanged as the site favicon through the root layout metadata. Keep its URL stable and publicly crawlable. After deployment, request a homepage recrawl in Search Console; Google determines when and whether the icon appears in search results.

The former incomplete chat integration is replaced with direct contact options. Its old POST endpoints return HTTP 410 and do not call any external AI service.

Only publish verified project, team, credential, and testimonial details. Permit assistance describes support for the structural scope; permit approval and review timing are determined by the local authority.
