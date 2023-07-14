import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import Github from "../icons/github";
import DEFAULT_SNIPPETS from "@/constants/default-snippets";

const [SNIPPETS_CARD_PROPS] = DEFAULT_SNIPPETS;

const SnippetsCard: React.FC<Partial<typeof SNIPPETS_CARD_PROPS>> = ({
  slug,
  title,
  description,
  likes,
}) => {
  return (
    <Link href={`/library/${slug}`}>
      <Card className="group transition-all overflow-hidden hover:scale-105 bg-card w-full h-full relative">
        <CardHeader className="space-y-6">
          <CardTitle className="text-xl">{title}</CardTitle>
          <div className="flex gap-4">
            <Badge
              variant={"secondary"}
              className="pl-0 bg-inherit hover:bg-inherit text-accent-pink"
            >
              <HeartFilledIcon className="mr-2" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
                {likes} Likes
              </span>
            </Badge>
            <div>
              <Github className="w-6 h-6 font-bold" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SnippetsCard;
