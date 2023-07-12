"use client";

import React, { useRef } from "react";
import Section from "../shared/Section";
import { Button } from "../ui/button";

import { ArrowDownIcon, ClockIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import Link from "next/link";
import { Badge } from "../ui/badge";

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
            className="hover:bg-transparent"
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
                    <Card className="hidden group lg:block transition-all absolute overflow-hidden -top-2 bg-card hover:scale-105 transform translate-y-7 translate-x-7 rotate-6 w-full">
                        <Link href={'/'} className="inset-0 absolute w-full h-full"></Link>
                        <AspectRatio ratio={16/9} className="relative">
                            <Image 
                                src={'https://source.unsplash.com/random/?abstract'} 
                                alt="thumbnail" 
                                fill 
                                className="rounded-md object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute bottom-2 right-2 flex gap-2 h-6">
                              <Badge variant={'secondary'} className="text-muted-foreground">
                                tag
                              </Badge>
                              <Badge variant={'secondary'} className="text-muted-foreground">
                                tag
                              </Badge>
                            </div>
                        </AspectRatio>
                        <CardHeader className="space-y-6">
                          <CardTitle>Back To Basic: Mental Model to Understand Flexbox</CardTitle>
                          <div className="flex gap-4">
                            <Badge variant={'secondary'} className="pl-0 bg-inherit text-muted-foreground">
                              <ClockIcon className="mr-2" /> 
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
                                6 min read
                              </span>
                            </Badge>
                            <Badge variant={'secondary'} className="pl-0 bg-inherit text-muted-foreground">
                              <EyeOpenIcon className="mr-2" /> 
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
                                7.750 Views
                              </span>
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent >
                          <CardTitle>July 19, 2021</CardTitle>
                          <p className="mt-4">
                          These are the mental models that I use to really understand flexbox, and I hope these can help you to understand too.
                          </p>
                        </CardContent>
                    </Card>
                    <Card className="absolute group transition-all overflow-hidden hover:scale-105 bg-card w-full">
                      <Link href={'/'} className="inset-0 absolute w-full h-full"></Link>
                        <AspectRatio ratio={16/9} className="relative">
                            <Image 
                                src={'https://source.unsplash.com/random/?abstract,space'} 
                                alt="thumbnail" 
                                fill 
                                className="rounded-md object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute bottom-2 right-2 flex gap-2 h-6">
                              <Badge variant={'secondary'} className="text-muted-foreground">
                                tag
                              </Badge>
                              <Badge variant={'secondary'} className="text-muted-foreground">
                                tag
                              </Badge>
                            </div>
                        </AspectRatio>
                        <CardHeader className="space-y-6">
                          <CardTitle>Back To Basic: Mental Model to Understand Flexbox</CardTitle>
                          <div className="flex gap-4">
                            <Badge variant={'secondary'} className="pl-0 bg-inherit text-muted-foreground">
                              <ClockIcon className="mr-2" /> 
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
                                6 min read
                              </span>
                            </Badge>
                            <Badge variant={'secondary'} className="pl-0 bg-inherit text-muted-foreground">
                              <EyeOpenIcon className="mr-2" /> 
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
                                7.750 Views
                              </span>
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent >
                          <CardTitle>July 19, 2021</CardTitle>
                          <p className="mt-4">
                          These are the mental models that I use to really understand flexbox, and I hope these can help you to understand too.
                          </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Intro;
