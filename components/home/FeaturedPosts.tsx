import React from "react";
import Section from "../shared/Section";
import Link from "next/link";
import { Button } from "../ui/button";
import PostCard from "../blog/PostCard";

export const FeaturedPosts = () => {
  return (
    <Section className="py-20 space-y-4">
      <h2 className="text-4xl my-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
        Featured Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div>
        <Link href={"/blog"} aria-label="see more post">
          <Button variant={"outline"} size={"lg"}>
            See more post
          </Button>
        </Link>
      </div>
    </Section>
  );
};
