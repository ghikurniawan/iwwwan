"use client";

import React, { useRef } from "react";
import Section from "../shared/Section";
import { Button } from "../ui/button";

import { ArrowDownIcon } from "@radix-ui/react-icons";
import PostCard from "../blog/PostCard";

const Intro = () => {
  const refIntro = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Section id="intro" className="relative flex flex-col justify-center">
      <div className="absolute -top-12 left-0 right-0">
        <div className="w-full flex justify-center">
            <Button
            onClick={() => scrollToSection(refIntro)}
            variant={"ghost"}
            className="hover:bg-transparent p-0"
            >
                <ArrowDownIcon className="w-12 h-12 hover:text-accent-pink animate-bounce" />
            </Button>
        </div>
      </div>
      <div ref={refIntro} className="py-20">
        <div className="flex flex-col-reverse md:flex-row gap-4">

            <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center">
                <h1 className="text-4xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
                Rebuild your mental model
                </h1>
                <p className="text-lg">
                    Mental model will make front-end development more predictable by seeing how they work fundamentally. In my blog, I&apos;m sharing how I approach something and how my mental model affect my learning about a certain topic.
                </p>
            </div>
            <div className="lg:w-1/2 w-full p-0 md:py-8 md:px-24 min-h-[33rem]">
                <div className="w-full relative">
                    <div className="hidden absolute lg:block -top-2 transform translate-y-7 translate-x-7 rotate-6">
                      <PostCard />
                    </div>
                    <div className="absolute transition-all hover:scale-105">
                      <PostCard />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Intro;
