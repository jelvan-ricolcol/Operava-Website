# Operava Website

Public Cloudflare Pages sources for [operavaglobal.com](https://www.operavaglobal.com).

## Live route

`https://www.operavaglobal.com/businessverified/googlemaps`

This path is a static HTML page so Meta/Facebook can read Open Graph tags without JavaScript. Human visitors are then sent to the verified Google Maps listing.

Verified destination (both supplied short links resolve to the same place):

`https://maps.app.goo.gl/JTZxoYr5SQxYpux68`

## Deploy on Cloudflare Pages

1. Connect this repository to the existing `operavaglobal.com` Pages project **or** copy `businessverified/googlemaps/index.html` into the current production site at `public/businessverified/googlemaps/index.html`.
2. Keep existing security headers. Merge `_headers` rather than replacing production headers.
3. Do not add an HTTP 302 for this path. Meta needs the HTML body.
4. After deploy, scrape the URL in the [Meta Sharing Debugger](https://developers.facebook.com/tools/debug/).

## Security

The Maps destination is hard-coded. Query parameters such as `?redirect=` are ignored.
