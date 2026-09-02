const MAPS_URL = "https://www.google.com/maps?cid=13781392094140743681";
const CANONICAL = "https://www.operavaglobal.com/businessverified/googlemaps";
const OG_IMAGE =
  "https://res.cloudinary.com/sdaxzncs/image/upload/c_fill,w_1200,h_630,f_jpg,q_auto/v1786240859/Cover%20Photo.png";

export const onRequestGet: PagesFunction = async () => {
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Operava Global Solutions | Google Maps</title>
    <meta name="description" content="Find Operava Global Solutions on Google Maps and view our business location." />
    <link rel="canonical" href="${CANONICAL}" />
    <meta property="og:title" content="Operava Global Solutions | Google Maps" />
    <meta property="og:description" content="Find Operava Global Solutions on Google Maps and view our business location." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${CANONICAL}" />
    <meta property="og:site_name" content="OPERAVA" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "OPERAVA",
        "alternateName": ["OPERAVA GLOBAL SOLUTIONS", "OPERAVA Global Solutions", "operavaglobal.com"],
        "url": "https://www.operavaglobal.com/"
      }
    </script>
  </head>
  <body>
    <p>Opening Operava on Google Maps…</p>
    <p><a href="${MAPS_URL}" target="_blank" rel="noopener noreferrer">Open Operava on Google Maps</a></p>
    <script>
      (function () {
        var WEB = ${JSON.stringify(MAPS_URL)};
        var INTENT = "intent://www.google.com/maps?cid=13781392094140743681#Intent;scheme=https;package=com.google.android.apps.maps;S.browser_fallback_url=" + encodeURIComponent(WEB) + ";end";
        var url = /Android/i.test(navigator.userAgent || "") ? INTENT : WEB;
        var ua = navigator.userAgent || "";
        if (/facebookexternalhit|Facebot|Twitterbot|LinkedInBot|WhatsApp|Slackbot|Pinterest|Discordbot|TelegramBot|Googlebot/i.test(ua)) return;
        var opened = window.open(url, "_blank", "noopener,noreferrer");
        if (!opened) location.assign(WEB);
      })();
    </script>
  </body>
</html>`;
  return new Response(html, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8", "x-robots-tag": "index, follow" },
  });
};
