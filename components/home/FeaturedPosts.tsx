import React from "react";
import Section from "../shared/Section";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import PostCard from "../blog/PostCard";
import DEFAULT_POSTS from "@/constants/default-posts";

export const FeaturedPosts = () => {
  return (
    <Section className="py-20 space-y-4">
      <h2 className="text-2xl md:text-4xl my-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
        Featured Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {DEFAULT_POSTS.map(post => (
        <PostCard 
          key={post.id}
          {...post}
        />
      ))}
      </div>
      <div>
        <Link href={"/blog"} aria-label="see more post">
          <span  className={buttonVariants({variant : 'outline', size: 'lg'})}>
            See more post
          </span>
        </Link>
      </div>
    </Section>
  );
};
