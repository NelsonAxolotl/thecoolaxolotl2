import { SitemapStream, streamToPromise } from "sitemap";
import { writeFile } from "fs/promises";

const siteUrl = "https://www.thecoolaxolotl.com";

const pages = [
  {
    url: "/",
    changefreq: "weekly",
    priority: 1.0,
  },
  {
    url: "/privacy-policy",
    changefreq: "monthly",
    priority: 0.4,
  },
  {
    url: "/legal-notice",
    changefreq: "monthly",
    priority: 0.4,
  },
];

async function generateSitemap() {
  try {
    const sitemap = new SitemapStream({ hostname: siteUrl });

    pages.forEach((page) => sitemap.write(page));

    sitemap.end();

    const data = await streamToPromise(sitemap);

    await writeFile("public/sitemap.xml", data);

    console.log("✅ Sitemap généré avec succès !");
  } catch (error) {
    console.error("❌ Erreur lors de la génération :", error);
    process.exitCode = 1;
  }
}

generateSitemap();
