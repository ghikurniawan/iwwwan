"use client";

import React from "react";
import DEFAULT_POSTS from "@/constants/default-posts";
import NovelEditor from "../editor";
import { notFound } from "next/navigation";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

const BlogView: React.FC<{ slug: string }> = ({ slug }) => {
  const post = DEFAULT_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  const { title, description, thumbnail, content } = post;
  return (
    <div className="py-20">
      <AspectRatio ratio={21 / 9} className="relative">
        <Image
          src={thumbnail}
          alt={slug}
          fill
          className="rounded-md object-cover -z-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </AspectRatio>
      <header className="mt-6">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </header>
      <NovelEditor editable={false} autofocus={false} content={content} />
    </div>
  );
};

export default BlogView;
