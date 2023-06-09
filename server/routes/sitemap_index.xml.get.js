import getAllPosts from "../../utils/get-story.js"

export default defineCachedEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  const routes = await getAllPosts()

  const timestamp = new Date().toISOString()
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">',
    ...routes.map((route) =>
      [
        "<url>",
        `   <loc>${runtimeConfig.public.siteUrl}${route.full_slug}</loc>`,
        `   <lastmod>${timestamp}</lastmod>`,
        "</url>",
      ].join("")
    ),
    "</urlset>",
  ].join("")
  setHeader(event, "content-type", "application/xml")
  return sitemap
})
