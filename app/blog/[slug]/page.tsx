import { getAllSlug } from "@/app/_actions";
import Section from "@/components/shared/Section";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getDelay } from "@/lib/getDelai";
import { getBlogBySlug } from "@/lib/model/getBlogBySlug";
import { ClockIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { FC, Suspense, lazy } from "react";
import TrackView from "../IncrementBlogView";

const NovelEditor = lazy(() => import("@/components/editor"));

export async function generateStaticParams() {
  const slugs = await getAllSlug();
  return slugs.map((slug) => ({
    slug: slug.slug,
  }));
}

export default function BlogViewPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <Section className="px-2 min-h-screen">
      <Suspense fallback={<FallbackContent />}>
        <Content slug={slug} />
      </Suspense>
    </Section>
  );
}

const FallbackContent = () => {
  return (
    <div className="py-10 space-y-4">
      <AspectRatio ratio={21 / 9} className="relative">
        <div className="w-full h-full bg-secondary animate-pulse rounded-xl"></div>
      </AspectRatio>
      <div className="mt-6 space-y-2">
        <div className="h-6 w-full lg:w-1/4 bg-secondary animate-pulse"></div>
        <div className="md:hidden h-6 w-1/5 bg-secondary animate-pulse"></div>
      </div>
    </div>
  );
};

const FallbactBanner = () => {
  return (
    <div className="w-full h-full bg-secondary animate-pulse rounded-xl"></div>
  );
};

const Banner: FC<{ slug: string; thumbnail: string }> = async ({
  slug,
  thumbnail,
}) => {
  const delay = await getDelay(1500);
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

const Content = async ({ slug }) => {
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();
  const { title, thumbnail, content, stats, author } = blog;
  return (
    <div className="py-10 space-y-4">
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
          <div className="sticky top-20 flex lg:flex-col justify-between">
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
            <div>right</div>
          </div>
        </div>
      </div>
    </div>
  );
};
