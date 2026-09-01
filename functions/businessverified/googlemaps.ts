const MAPS_URL = "https://maps.app.goo.gl/MfpDV86cuqLvyRzx8?g_st=ic";
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
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${CANONICAL}" />
    <meta property="og:title" content="Operava Global Solutions | Google Maps" />
    <meta property="og:description" content="Find Operava Global Solutions on Google Maps and view our business location." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${CANONICAL}" />
    <meta property="og:site_name" content="Operava Global Solutions" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta http-equiv="refresh" content="8;url=${MAPS_URL}" />
  </head>
  <body>
    <p>Redirecting you to Operava on Google Maps…</p>
    <p><a href="${MAPS_URL}">Open Operava on Google Maps</a></p>
    <script>
      (function () {
        var ua = navigator.userAgent || "";
        if (/facebookexternalhit|Facebot|Twitterbot|LinkedInBot|WhatsApp|Slackbot|Pinterest|Discordbot|TelegramBot|Googlebot/i.test(ua)) return;
        location.replace(${JSON.stringify(MAPS_URL)});
      })();
    </script>
  </body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=300",
      "x-robots-tag": "index, follow",
    },
  });
};
