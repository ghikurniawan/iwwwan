"use client";
import IntersetprionSheet from "@/components/shared/IntersetprionSheet";
import React, { FC, Suspense, lazy } from "react";
import Image from "next/image";
import { useBlogContext } from "@/contexts/BlogContext";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CaretLeftIcon, ClockIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { getDelay } from "@/lib/getDelai";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TrackView from "@/app/blog/IncrementBlogView";

const NovelEditor = lazy(() => import("@/components/editor"));

export default function BlogViewInterseption() {
  const { blog } = useBlogContext();
  const router = useRouter();
  if (!blog) return;
  const { title, thumbnail, content, slug, stats, author } = blog;
  return (
    <IntersetprionSheet>
      <div className="py-10 space-y-4">
        <Button variant="outline" onClick={() => router.back()}>
          <CaretLeftIcon className="mr-2" />
          Back
        </Button>
        <AspectRatio ratio={21 / 9} className="relative">
          <Suspense fallback={<FallbactBanner />}>
            <Banner slug={slug} thumbnail={thumbnail} />
            <TrackView slug={slug} />
          </Suspense>
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
            <div className="sticky top-0 flex lg:flex-col justify-between">
              <div className="lg:py-4 space-y-2">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={author?.image} alt={author?.name} />
                    <AvatarFallback>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-pink via-purple-500 to-cyan-500"></div>
                    </AvatarFallback>
                  </Avatar>
                  <h4 className=" font-bold">
                    {author?.username ?? author?.name}
                  </h4>
                </div>
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
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </IntersetprionSheet>
  );
}

const FallbactBanner = () => {
  return (
    <div className="w-full h-full bg-secondary animate-pulse rounded-xl"></div>
  );
};

const Banner: FC<{ slug: string; thumbnail: string }> = async ({
  slug,
  thumbnail,
}) => {
  const delay = await getDelay(500);
  return (
    delay && (
      <Image
        src={thumbnail}
        alt={slug}
        fill
        draggable={false}
        className="rounded-md object-cover -z-0"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    )
  );
};
