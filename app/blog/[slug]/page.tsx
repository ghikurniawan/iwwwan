import { getAllSlug } from "@/app/_actions";
import NotFound from "@/app/not-found";
import Section from "@/components/shared/Section";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { getBlogBySlug } from "@/lib/model/getBlogBySlug";
import { ClockIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React, { Suspense, lazy } from "react";

const NovelEditor = lazy(() => import("@/components/editor"));

export async function generateStaticParams() {
  const slugs = await getAllSlug();
  return slugs.map((slug) => ({
    slug: slug.slug,
  }));
}

export default async function BlogViewPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);
  if (!blog) NotFound();
  const { title, thumbnail, content, stats, author } = blog;
  return (
    <Section className="px-2 min-h-screen">
      <div className="py-10 space-y-4">
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
            <div className="sticky top-20 flex lg:flex-col justify-between">
              <div className="lg:py-4 space-y-2">
                <h4>{author?.username ?? "Guest"}</h4>
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
    </Section>
  );
}
