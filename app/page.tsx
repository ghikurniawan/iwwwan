import FeaturedPosts from "@/components/home/FeaturedPosts";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import { LibrarySnippets } from "@/components/home/LibrarySnippets";
import { getAllBlog } from "@/lib/model/getAllBlog";
// import { TypeBlog } from "@/types";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={"..."}>
        {/* @ts-ignore ExoticComponent */}
        <ExoticComponent />
      </Suspense>
      <FeaturedProject />
      <LibrarySnippets />
    </>
  );
}

// const getBlogs = new Promise<TypeBlog[]>((resolve) => {
//   setTimeout(async () => {
//     const res: TypeBlog[] = await getAllBlog(6);
//     resolve(res);
//   }, 3000);
// });

const ExoticComponent = async () => {
  const blogs = await getAllBlog(6);
  return (
    <>
      <Intro blogs={blogs} />
      <FeaturedPosts blogs={blogs} />
    </>
  );
};
