import React from "react";
import Section from "../shared/Section";
import { buttonVariants } from "../ui/button";
import {
  GitHubLogoIcon,
  IdCardIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const Hero = () => {
  return (
    <Section className="h-[80vh] py-20">
      <article className="flex gap-2 flex-col">
        <h2 className="text-3xl lg:text-5xl font-extrabold">Hi!</h2>
        <h1 className="text-4xl lg:text-7xl font-extrabold">
          You can call me &nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
            Iwan
          </span>
        </h1>
        <p className="text-md lg:text-xl font-semibold max-w-3xl mt-4">
          I work with React Ecosystem, and write to teach people how to rebuild
          and redefine fundamental concepts through mental models.
        </p>
        <p className="text-md lg:text-xl font-semibold max-w-2xl mt-4">
          Don&apos;t forget to sign my &nbsp;
          <Link
            href="/"
            className="transition-all inline-flex items-center font-medium border-primary border-dotted border-b-2 hover:border-black/0"
          >
            <span className="bg-gradient-to-tr from-accent-pink via-purple-500 to-cyan-600 bg-clip-text text-transparent">
              guestbook
            </span>
          </Link>
          !
        </p>
        <div className="flex gap-4 my-4">
          <div className="group relative">
            <div className="absolute -inset-0.5 animate-pulse rounded blur bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600 opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-1000" />
            <Link
              href={"#intro"}
              className={`h-9 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm relative lg:text-xl font-bold bg-background hover:bg-background hover:border-accent-pink/80 hover:scale-105 transition-transform`}
            >
              Read the blog
            </Link>
          </div>
          <Link href={"/about"} aria-label="About me button">
            <span
              className={`${buttonVariants({
                variant: "outline",
              })}lg:text-xl font-bold bg-background hover:bg-background hover:scale-105 transition-transform`}
            >
              Learn more about me
            </span>
          </Link>
        </div>
        <div className="flex w-full max-w-2xl gap-2">
          <Link
            href={"/"}
            className={`inline-flex hover:text-primary items-center justify-center px-1 lg:px2 text-md text-muted-foreground font-semibold hover:bg-background`}
          >
            <IdCardIcon className="mr-2 w-5 h-5" />
            Resume
          </Link>
          <Link
            href={"/"}
            className={`inline-flex hover:text-primary items-center justify-center px-1 lg:px2 text-md text-muted-foreground font-semibold hover:bg-background`}
          >
            <TwitterLogoIcon className="mr-2 w-5 h-5" />
            @iwwwan
          </Link>
          <Link
            href={"/"}
            className={`inline-flex hover:text-primary items-center justify-center px-1 lg:px2 text-md text-muted-foreground font-semibold hover:bg-background`}
          >
            <GitHubLogoIcon className="mr-2 w-5 h-5" />
            @ghiwwwan
          </Link>
        </div>
      </article>
    </Section>
  );
};

export default Hero;
