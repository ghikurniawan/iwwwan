"use client";

import React, { Suspense, lazy } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import DEFAULT_PROJECTS from "@/constants/default-projects";

const NovelEditor = lazy(() => import("@/components/editor"));

const ProjectView: React.FC<{ slug: string }> = ({ slug }) => {
  const post = DEFAULT_PROJECTS.find((p) => p.slug === slug);

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
      <Suspense fallback={"loading..."}>
        <NovelEditor editable={false} autofocus={false} content={content} />
      </Suspense>
    </div>
  );
};

export default ProjectView;
