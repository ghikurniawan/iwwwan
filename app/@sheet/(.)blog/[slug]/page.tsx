"use client";
import IntersetprionSheet from "@/components/shared/IntersetprionSheet";
import React, { Suspense, lazy } from "react";
import Image from "next/image";
import { useBlogContext } from "@/contexts/BlogContext";
import { notFound } from "next/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CaretLeftIcon, ClockIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";

const NovelEditor = lazy(() => import("@/components/editor"));
export default function BlogViewInterseption() {
  const { blog } = useBlogContext();
  if (!blog) notFound();
  const { title, thumbnail, content, slug, stats } = blog;
  const router = useRouter();
  return (
    <IntersetprionSheet>
      <div className="py-10 space-y-4">
        <Button variant="outline" onClick={() => router.back()}>
          <CaretLeftIcon className="mr-2" />
          Back
        </Button>
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
        <div className="flex flex-col-reverse lg:flex-row gap-2">
          <div className=" basis-3/4 w-full">
            <Suspense fallback={"loading..."}>
              <NovelEditor
                editable={false}
                autofocus={false}
                content={content as object}
              />
            </Suspense>
          </div>
          <div className="basis-1/3 w-full">
            <div className="sticky top-0 flex justify-between">
              <div className="flex gap-4">
                <Badge
                  variant={"secondary"}
                  className="pl-0 bg-inherit hover:bg-inherit text-accent-pink"
                >
                  <ClockIcon className="mr-2" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
                    6 min read
                  </span>
                </Badge>
                <Badge
                  variant={"secondary"}
                  className="pl-0 bg-inherit hover:bg-inherit text-accent-pink"
                >
                  <EyeOpenIcon className="mr-2" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
                    {stats?.views} Views
                  </span>
                </Badge>
              </div>
              <div>right</div>
            </div>
          </div>
        </div>
      </div>
    </IntersetprionSheet>
  );
}
