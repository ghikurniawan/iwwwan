import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ClockIcon, EyeOpenIcon } from "@radix-ui/react-icons";

const PostCard = () => {
  return (
    <Card className="group transition-all overflow-hidden hover:scale-105 bg-card w-full relative">
      <Link href={"/"} className="z-10 inset-0 absolute w-full h-full"></Link>
      <AspectRatio ratio={16 / 9} className="relative">
        <Image
          src={"https://source.unsplash.com/random/?abstract,space"}
          alt="thumbnail"
          fill
          className="rounded-md object-cover -z-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-2 right-2 flex gap-2 h-6">
          <Badge
            variant={"secondary"}
            className="bg-secondary/75 text-muted-foreground"
          >
            tag
          </Badge>
          <Badge
            variant={"default"}
            className="bg-secondary/75 text-muted-foreground"
          >
            tag
          </Badge>
        </div>
      </AspectRatio>
      <CardHeader className="space-y-6">
        <CardTitle>Back To Basic: Mental Model to Understand Flexbox</CardTitle>
        <div className="flex gap-4">
          <Badge
            variant={"secondary"}
            className="pl-0 bg-inherit text-muted-foreground"
          >
            <ClockIcon className="mr-2" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
              6 min read
            </span>
          </Badge>
          <Badge
            variant={"secondary"}
            className="pl-0 bg-inherit text-muted-foreground"
          >
            <EyeOpenIcon className="mr-2" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
              7.750 Views
            </span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>July 19, 2021</CardTitle>
        <p className="mt-4">
          These are the mental models that I use to really understand flexbox,
          and I hope these can help you to understand too.
        </p>
      </CardContent>
    </Card>
  );
};

export default PostCard;
