import Section from "@/components/shared/Section";
import React, { Suspense, lazy } from "react";
const BlogView = lazy(() => import("@/components/blog/BlogView"));

export default function BlogViewPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <Section className="px-2 min-h-screen">
      <Suspense fallback={"loading..."}>
        <BlogView slug={slug} />
      </Suspense>
    </Section>
  );
}
