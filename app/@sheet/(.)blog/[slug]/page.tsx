"use client";
import IntersetprionSheet from "@/components/shared/IntersetprionSheet";
import React, { Suspense, lazy } from "react";
import Image from "next/image";
import { useBlogContext } from "@/contexts/BlogContext";
import { notFound } from "next/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const NovelEditor = lazy(() => import("@/components/editor"));
export default function BlogViewInterseption() {
  const { blog } = useBlogContext();
  if (!blog) notFound();
  const { title, thumbnail, content, slug } = blog;
  return (
    <IntersetprionSheet>
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
        </header>
        <Suspense fallback={"loading..."}>
          <NovelEditor
            editable={false}
            autofocus={false}
            content={content as object}
          />
        </Suspense>
      </div>
    </IntersetprionSheet>
  );
}
