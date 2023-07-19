import ContentBlog from "@/components/blog/ContentBlog";
import ShortPost from "@/components/blog/ShortPost";
import Section from "@/components/shared/Section";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { getAllBlog } from "@/lib/model/getAllBlog";
import { Suspense } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { getDelay } from "@/lib/getDelai";
import { getAllTag } from "../_actions";

export const dynamic = "force-dynamic";

export default async function Blog() {
  const blogs = await getAllBlog(6);
  return (
    <Section className="py-10 space-y-4 flex-initial min-h-screen">
      <Suspense
        fallback={
          <div className="bg-accent mt-4 h-24 w-36 animate-pulse"></div>
        }
      >
        <Heading />
      </Suspense>
      <Suspense
        fallback={
          <div className="h-12 md:h-5 space-y-4">
            <div className="h-4 md:h-5 w-2/3 lg:w-1/3 bg-accent animate-pulse"></div>
            <div className="md:hidden h-4 md:h-5 w-1/5 lg:w-1/3 bg-accent animate-pulse"></div>
          </div>
        }
      >
        <Description />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex gap-4">
            <div className="w-full h-9 bg-accent animate-pulse border rounded-md" />
            <div className="w-full basis-3/6 lg:basis-1/6 h-9 bg-secondary rounded-md border animate-pulse" />
          </div>
        }
      >
        <SearchBox />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex flex-wrap gap-2">
            <p className="block bg-accent animate-pulse w-32"></p>
            {[1, 2, 3, 4, 5, 6, 7].map((tag) => (
              <Badge
                key={tag}
                variant={"secondary"}
                className="h-6 w-12 animate-pulse"
              ></Badge>
            ))}
          </div>
        }
      >
        <Tags />
      </Suspense>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Suspense fallback={<Fallback />}>
          <ContentBlog blogs={blogs} />
        </Suspense>
      </div>
    </Section>
  );
}

const Heading = async () => {
  const delay = await getDelay(500);
  return (
    delay && (
      <h2 className="text-7xl mt-4 h-24 leading-normal font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
        Blog
      </h2>
    )
  );
};

const Description = async () => {
  const delay = await getDelay(800);
  return (
    delay && (
      <div className="h-12 md:h-5">
        <p className="text-muted-foreground">
          Thoughts, mental models, and tutorials about front-end development.
        </p>
      </div>
    )
  );
};

const SearchBox = async () => {
  const delay = await getDelay(1300);
  return (
    delay && (
      <div className="flex gap-4">
        <Input type="text" placeholder="Search..." />
        <ShortPost />
      </div>
    )
  );
};

const Tags = async () => {
  const tes = await getAllTag(7);
  return (
    tes && (
      <div className="flex flex-wrap gap-2 ml-2">
        <p className="block">Choose topic:</p>
        {tes.map((tag) => (
          <Badge key={tag.tagName} variant={"secondary"}>
            {tag.tagName}
          </Badge>
        ))}
      </div>
    )
  );
};

const Fallback = () => {
  return (
    <>
      {[1, 2, 3, 4].map((k) => (
        <Card key={k} className="bg-card w-full h-full relative">
          <AspectRatio ratio={16 / 9} className="relative">
            <div className="w-full h-full animate-pulse bg-accent"></div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <div className="h-6 w-8 rounded-md bg-background"></div>
              <div className="h-6 w-12 rounded-md bg-background"></div>
            </div>
          </AspectRatio>
          <CardContent className="py-4 space-y-4">
            <div>
              <div className="w-full h-3 bg-secondary animate-pulse"></div>
              <div className="hidden md:block w-2/4 h-3 mt-2 bg-secondary animate-pulse"></div>
            </div>
            <div className="flex gap-4 py-2">
              <div className="h-4 w-14 bg-secondary animate-pulse"></div>
              <div className="h-4 w-14 bg-secondary animate-pulse"></div>
            </div>
            <div className="h-6 w-24 bg-secondary animate-pulse"></div>
            <div className="space-y-2">
              <div className="w-full h-2 bg-secondary animate-pulse"></div>
              <div className="w-full h-2 bg-secondary animate-pulse"></div>
              <div className="w-full h-2 bg-secondary animate-pulse"></div>
              <div className="w-full h-2 bg-secondary animate-pulse"></div>
              <div className="w-3/4 h-2 bg-secondary animate-pulse"></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
