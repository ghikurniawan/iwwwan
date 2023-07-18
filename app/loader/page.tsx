import Section from "@/components/shared/Section";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FC } from "react";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  return (
    <Section className="px-2 min-h-screen">
      <div className="py-10 space-y-4">
        <AspectRatio ratio={21 / 9} className="relative">
          <div className="w-full h-full bg-secondary animate-pulse rounded-xl"></div>
        </AspectRatio>
        <div className="mt-6 space-y-2">
          <div className="h-6 w-full lg:w-1/4 bg-secondary animate-pulse"></div>
          <div className="md:hidden h-6 w-1/5 bg-secondary animate-pulse"></div>
        </div>
        {/* <div className="flex flex-col-reverse lg:flex-row gap-2">
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
        </div> */}
      </div>
    </Section>
  );
};

export default Loader;
