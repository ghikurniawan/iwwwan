import { getAllSlug } from "./_actions";

export default async function sitemap() {
  const allBlogs = await getAllSlug()
  const blogs = allBlogs.map((post) => ({
    url: process.env.NEXT_PUBLIC_BASE_URL + '/blog/' + post.slug,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const routes = ['', '/blog', '/project', '/guestbook'].map(
    (route) => ({
      url: process.env.NEXT_PUBLIC_BASE_URL + route,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}