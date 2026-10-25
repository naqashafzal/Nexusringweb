# Nexus Ring website

Next.js development and waitlist website for the Nexus Ring desktop controller.

## Local development

```sh
npm ci
npm run dev
```

## Verification

```sh
npm run lint
npm test
npm run build
npm start
```

## Waitlist setup

Set `DISCORD_WEBHOOK_URL` in the server environment (for example, `.env.local` locally or the deployment environment in Vercel). Never expose this value through a `NEXT_PUBLIC_` variable or commit it.

Signup details are sent to the team through Discord. The endpoint returns 503 if the webhook is missing and 502 if Discord rejects the request; the form displays an error rather than claiming success. There is no checkout, stock reservation, reservation key, or confirmation email service. The privacy notice documents the current handling.

For launch verification, use a dedicated test webhook to confirm a successful signup reaches the team. Do not use real customer details in tests. Verify failure handling without a webhook, too.

Proposed edition contents and indicative prices are shared in `src/lib/tiers.ts`. Keep the public LLM reference files in sync when changing the product status. Real prototype photos or video can be added when supplied; the current website labels its interactive models as concept previews.
