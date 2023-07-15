import Section from "@/components/shared/Section";
import React, { Suspense, lazy } from "react";
const ProjectView = lazy(() => import("@/components/project/ProjectView"));

export default function ProjectViewPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return (
    <Section className="px-2 min-h-screen">
      <Suspense fallback={"loading..."}>
        <ProjectView slug={slug} />
      </Suspense>
    </Section>
  );
}
