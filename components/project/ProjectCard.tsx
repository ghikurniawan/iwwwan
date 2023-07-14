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
import Link from "next/link";
import { GitBranch } from "lucide-react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import DEFAULT_PROJECTS from "@/constants/default-projects";

const [PROJECT_CARD_TYPE] = DEFAULT_PROJECTS;

const ProjectCard: React.FC<Partial<typeof PROJECT_CARD_TYPE>> = ({
  slug,
  title,
  description,
  tags,
  thumbnail,
}) => {
  return (
    <Link aria-label="see posts" href={`/project/${slug}`}>
      <Card className="group transition-all overflow-hidden hover:scale-105 bg-card w-full h-full relative">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex gap-4">
            <CardTitle>
              <GitBranch />
            </CardTitle>
            <CardTitle>
              <GitBranch />
            </CardTitle>
          </div>

          <AspectRatio ratio={16 / 9} className="relative">
            <Image
              src={thumbnail}
              alt="thumbnail"
              fill
              className="rounded-md object-cover"
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
          <CardTitle className="flex items-center">
            See more
            <ArrowRightIcon className="w-5 h-5 font-bold" />
          </CardTitle>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
