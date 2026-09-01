# Operava Maps landing

Standalone Cloudflare Pages site.

Production URL after you attach the custom domain:

`https://map.operavaglobal.com/google/verifiedbusiness`

Maps destination (stable, not a short link):

`https://www.google.com/maps?cid=13781392094140743681`

## Deploy separately (do not mix with www.operavaglobal.com)

1. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect git
2. Repository: `jelvan-ricolcol/Operava-Website`
3. Build command: leave empty
4. Output directory: `/`
5. Custom domain: `map.operavaglobal.com`
6. DNS CNAME `map` → the Pages project (`operava-map.pages.dev`)

Do not attach this project to `www.operavaglobal.com`.
