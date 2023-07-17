import { getAllBlogPostAction } from "@/app/_actions";
import { REVALIDATE } from "@/constants";
import { cache } from "react";
import 'server-only'

export const revalidate = REVALIDATE;

export const getAllBlog = cache(async (take: number) => {
  const blog = await getAllBlogPostAction(take);
  return blog;
});