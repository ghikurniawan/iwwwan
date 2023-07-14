import React from "react";
import Section from "../shared/Section";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import SnippetsCard from "../library-snippets/SnippetCard";
import DEFAULT_SNIPPETS from "@/constants/default-snippets";

export const LibrarySnippets = () => {
  return (
    <Section className="py-20 space-y-4">
      <h2 className="text-2xl md:text-4xl my-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
        Library of Code Snippets
      </h2>
      <p className="text-muted-foreground text-lg">
        List of code snippets that I store for easy access.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {DEFAULT_SNIPPETS.map((snippet) => (
          <SnippetsCard key={snippet.id} {...snippet} />
        ))}
      </div>
      <div>
        <Link href={"/library"} aria-label="See more snippets">
          <span className={buttonVariants({ variant: "outline", size: "lg" })}>
            See more Snippets
          </span>
        </Link>
      </div>
    </Section>
  );
};
