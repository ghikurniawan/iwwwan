"use client";

import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ClockIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { TypeBlog } from "@/types";
import { useBlogContext } from "@/contexts/BlogContext";
import { notFound } from "next/navigation";

const PostCard: React.FC<{ blog: TypeBlog }> = ({ blog }) => {
  const { setBlog } = useBlogContext();
  if (!blog) notFound();
  const { slug, title, createdAt, stats, tag, thumbnail } = blog;
  return (
    <Link href={`/blog/${slug}`} onClick={() => setBlog(blog)}>
      <Card className="group transition-all overflow-hidden hover:border-foreground/50 bg-card w-full h-full relative">
        <AspectRatio ratio={16 / 9} className="relative">
          <Image
            src={thumbnail}
            alt="thumbnail"
            fill
            className="rounded-md object-cover -z-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute bottom-2 right-2 flex gap-2 h-6">
            {tag?.map((t, index) => (
              <Badge
                key={index}
                variant={"secondary"}
                className="bg-secondary/75 text-muted-foreground"
              >
                {t.tagName}
              </Badge>
            ))}
          </div>
        </AspectRatio>
        <CardHeader className="space-y-6">
          <CardTitle>{title}</CardTitle>
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
        </CardHeader>
        <CardContent className="space-y-6">
          <CardTitle>{createdAt.toLocaleDateString()}</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            repellendus mollitia? Nostrum iste ab amet temporibus sapiente
            veritatis deserunt, eligendi saepe. In, mollitia beatae delectus
            quidem temporibus consectetur ipsam aperiam.
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PostCard;
