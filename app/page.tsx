import { FeaturedPosts } from "@/components/home/FeaturedPosts";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import { LibrarySnippets } from "@/components/home/LibrarySnippets";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedPosts />
      <FeaturedProject />
      <LibrarySnippets />
    </>
  )
}
