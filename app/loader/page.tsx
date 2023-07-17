import Section from "@/components/shared/Section";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FC } from "react";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  return (
    <Section className="py-12 space-y-5 flex-initial min-h-screen">
      <div className="bg-accent h-24 w-36 animate-pulse my-4 "></div>
      <div className="h-10 md:h-6 w-2/3 lg:w-1/3 bg-accent animate-pulse"></div>
      <div className="flex gap-4">
        <div className="w-full h-8 bg-accent animate-pulse border rounded-md" />
        <div className="w-full basis-3/6 lg:basis-1/6 h-8 bg-secondary rounded-md border animate-pulse" />
      </div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
      </div>
    </Section>
  );
};

export default Loader;
