import DEFAULT_SNIPPETS from "@/constants/default-snippets";
import React, { Suspense, lazy } from "react";
import Section from "@/components/shared/Section";

const SnippetsCard = lazy(
  () => import("@/components/library-snippets/SnippetCard")
);

export default function Library() {
  return (
    <Section className="py-20 space-y-4 flex-initial min-h-screen">
      <h2 className="text-4xl my-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
        Library
      </h2>
      <p className="text-muted-foreground">
        Some collection of code snippets that I put for easy access, feel free
        to reuse!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Suspense fallback={"loading..."}>
          {DEFAULT_SNIPPETS.map((snippet) => (
            <SnippetsCard key={snippet.id} {...snippet} />
          ))}
        </Suspense>
      </div>
    </Section>
  );
}
