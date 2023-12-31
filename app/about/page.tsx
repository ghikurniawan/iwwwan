import React from "react";
import Section from "@/components/shared/Section";
import { buttonVariants } from "@/components/ui/button";
import {
  GitHubLogoIcon,
  IdCardIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function About() {
  return (
    <Section className="min-h-[80vh] py-20">
      <article className="flex gap-2 flex-col">
        <h2 className="text-xl lg:text-3xl font-extrabold">About</h2>
        <h1 className="text-2xl lg:text-4xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
            Iwan Kurniawan
          </span>
        </h1>
        <p className="text-md lg:text-md font-medium max-w-3xl mt-4">
          Hello! I&apos;m Iwan. I started learning web development in May 2020,
          which is the start of the pandemic. I have nothing much to do so I
          decided to learn web development from a udemy course, then started
          watching a bunch of youtube videos to explore more about web
          development especially frontend development.
        </p>
        <p className="text-md lg:text-md font-medium max-w-3xl mt-4">
          There are a lot of things and technologies to learn in frontend
          development and I am motivated to learn as much as possible. I enjoy
          learning something new and getting feedback to make myself better and
          improve.
        </p>
        <p className="text-md lg:text-md font-medium max-w-3xl mt-4">
          In this website I will be writing some blogs and showcase my projects.
          I believe that writing what I have learned is the best way to remember
          things, and I can share my knowledge along the way. So do contact me
          and I will be very happy to help!
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

        <div className="flex w-full max-w-2xl">
          <Link href={"/"}>
            <span
              className={`${buttonVariants({
                variant: "ghost",
              })} group px-1 lg:px2 text-md text-muted-foreground font-semibold hover:bg-background`}
            >
              <IdCardIcon className="mr-2 w-5 h-5" />
              Resume
            </span>
          </Link>
          <Link href={"/"}>
            <span
              className={`${buttonVariants({
                variant: "ghost",
              })} group px-1 lg:px2 text-md text-muted-foreground font-semibold hover:bg-background`}
            >
              <TwitterLogoIcon className="mr-2 w-5 h-5" />
              @iwwwan
            </span>
          </Link>
          <Link href={"/"}>
            <span
              className={`${buttonVariants({
                variant: "ghost",
              })} group px-1 lg:px2 text-md text-muted-foreground font-semibold hover:bg-background`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5" />
              @ghiwwwan
            </span>
          </Link>
        </div>
        <h2 className="text-md lg:text-xl font-semibold max-w-2xl mt-4">
          Current Favorite Tech Stack
        </h2>
      </article>
    </Section>
  );
}
