import { getBlogPostBySlugAction } from "@/app/_actions";
import { REVALIDATE } from "@/constants";
import { cache } from "react";
import 'server-only'

export const revalidate = REVALIDATE;

export const getBlogBySlug = cache(async (slug: string) => {
  const blog = await getBlogPostBySlugAction(slug);
  return blog;
});