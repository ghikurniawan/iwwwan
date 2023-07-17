import { FeaturedPosts } from "@/components/home/FeaturedPosts";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import { LibrarySnippets } from "@/components/home/LibrarySnippets";
import { Suspense } from "react";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Suspense fallback={"..."}>
        {/* @ts-ignore server component */}
        <FeaturedPosts />
      </Suspense>
      <FeaturedProject />
      <LibrarySnippets />
    </>
  );
}
