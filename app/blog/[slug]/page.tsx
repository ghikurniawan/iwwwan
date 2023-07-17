import { getAllSlug } from "@/app/_actions";
import NotFound from "@/app/not-found";
import NovelEditor from "@/components/editor";
import Section from "@/components/shared/Section";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getBlogBySlug } from "@/lib/model/getBlogBySlug";
import Image from "next/image";
import React, { Suspense } from "react";

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
  const { title, thumbnail, content } = blog;
  return (
    <Section className="px-2 min-h-screen">
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
    </Section>
  );
}
