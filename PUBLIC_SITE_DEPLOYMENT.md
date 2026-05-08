# MarginSignal OS Public Site Deployment

Last reviewed: 2026-05-08

## Current State

- Source repo: `products/marginsignalos.github.io`
- GitHub Pages domain: `https://www.marginsignalos.com`
- Hardened Vercel deployment: `https://marginsignalosgithubio.vercel.app`
- Vercel project: `marginsignalos.github.io`
- Vercel project id: `prj_oh2cZZQl9Jg5gJtlMpHhTyinjCRw`

The public site now includes `vercel.json` so Vercel serves real HTTP security headers:

- enforced `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- strict referrer and permissions policy

## DNS Cutover

`www.marginsignalos.com` still resolves to GitHub Pages until DNS is changed at the current DNS provider.

Vercel currently reports the domain is registered as a third-party domain using these current nameservers:

- `dns1.registrar-servers.com`
- `dns2.registrar-servers.com`

To complete the cutover, update DNS for `www.marginsignalos.com` to Vercel's required record:

```text
A  www  76.76.21.21
```

After DNS propagation, verify:

```bash
dig +short www.marginsignalos.com
curl -I https://www.marginsignalos.com/
```

Expected result:

- `dig` resolves to Vercel
- `curl -I` shows `content-security-policy`, `strict-transport-security`, `x-frame-options`, and `x-content-type-options`

## Rollback

If the Vercel cutover has an issue, restore the previous GitHub Pages DNS target:

```text
CNAME  www  bburdi000-bot.github.io
```

