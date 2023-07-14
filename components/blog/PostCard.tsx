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
import DEFAULT_POSTS from "@/constants/default-posts";

const [POSTCARD_TYPE] = DEFAULT_POSTS;

const PostCard: React.FC<Partial<typeof POSTCARD_TYPE>> = ({
  slug,
  title,
  description,
  createdAt,
  views,
  tags,
  thumbnail,
}) => {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="group transition-all overflow-hidden hover:scale-105 bg-card w-full h-full relative">
        <AspectRatio ratio={16 / 9} className="relative">
          <Image
            src={thumbnail}
            alt="thumbnail"
            fill
            className="rounded-md object-cover -z-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute bottom-2 right-2 flex gap-2 h-6">
            {tags?.map((tag, index) => (
              <Badge
                key={index}
                variant={"secondary"}
                className="bg-secondary/75 text-muted-foreground"
              >
                {tag}
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
                {views} Views
              </span>
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <CardTitle>{createdAt}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PostCard;
