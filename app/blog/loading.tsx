import Section from "@/components/shared/Section";
import React from "react";

export default function LoadingBlog() {
  return (
    <Section className="py-20 space-y-4 flex-initial min-h-screen">
      <div className="bg-accent w-1/4 lg:w-1/6 h-8 animate-pulse" />
      <div className="bg-accent w-3/4 lg:w-1/2 h-6 animate-pulse  mt-4 " />
      <div className="flex w-full gap-4">
        <div className="bg-accent w-full h-8 animate-pulse mt-6" />
        <div className="bg-accent w-44 h-8 animate-pulse mt-6" />
      </div>
      <div className="flex w-full gap-4 max-w-xl">
        <div className="bg-accent w-20 h-8 animate-pulse" />
        <div className="bg-accent w-20 h-8 animate-pulse" />
        <div className="bg-accent w-20 h-8 animate-pulse" />
        <div className="bg-accent w-20 h-8 animate-pulse" />
      </div>
    </Section>
  );
}
