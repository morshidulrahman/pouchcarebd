export const dynamic = "force-static";

const baseUrl = "https://pouchcare.com.bd";

const staticPages = ["", "/about", "/contact", "/services", "/blogs"];

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (page) => `
          <url>
            <loc>${baseUrl}${page}</loc>
            <changefreq>weekly</changefreq>
            <priority>0.7</priority>
          </url>
        `
      )
      .join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
