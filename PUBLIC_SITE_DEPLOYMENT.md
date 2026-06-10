# MarginSignal OS Public Site Deployment

Last reviewed: 2026-06-10

## Current State

- Source repo: `marginsignalos.github.io` (GitHub: `bburdi000-bot/marginsignalos.github.io`)
- Live domain: `https://www.marginsignalos.com` — **now served by Vercel** (cutover completed 2026-06-10)
- Direct Vercel URL: `https://marginsignalosgithubio.vercel.app`
- Vercel project: `marginsignalos.github.io`
- Vercel project id: `prj_oh2cZZQl9Jg5gJtlMpHhTyinjCRw`
- Canonical host: `www` (apex `marginsignalos.com` redirects → `www`)

The site ships `vercel.json`, so Vercel serves real HTTP security headers (verified live 2026-06-10):

- enforced `Content-Security-Policy`
- `Strict-Transport-Security` (`max-age=63072000; includeSubDomains; preload`)
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- strict referrer and permissions policy

## DNS (cutover complete)

DNS at the registrar (Namecheap, nameservers `dns1/dns2.registrar-servers.com`) now points to Vercel:

```text
A      @     76.76.21.21
CNAME  www   cname.vercel-dns.com
```

Email/verification records were preserved (SPF, DKIM, DMARC, Resend, Google site verification).

Verify:

```bash
dig +short www.marginsignalos.com
curl -I https://www.marginsignalos.com/
```

Expected:

- `dig` resolves to Vercel (`cname.vercel-dns.com` / Vercel IPs)
- `curl -I` shows `server: vercel` plus `content-security-policy`, `strict-transport-security`, `x-frame-options`, and `x-content-type-options`

## Rollback

If the Vercel deployment has an issue, restore the previous GitHub Pages DNS target at Namecheap:

```text
A      @     185.199.108.153 (and .109/.110/.111.153)
CNAME  www   bburdi000-bot.github.io
```

## Known gap — authenticated destinations do not exist yet

The public site links to `https://portal.marginsignalos.com/login` ("Client Portal" / "Log in to the MSOS Terminal") in several places. As of 2026-06-10 that host **does not resolve** (no DNS record), so those links are dead. There is also no separate demo/app/terminal subdomain. The only working product surface today is the in-page **Preliminary Scanner** on the homepage (sample data, runs in-browser). This needs to be resolved before driving clients/prospects to "log in."
