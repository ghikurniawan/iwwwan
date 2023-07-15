import IntersetprionSheet from "@/components/shared/IntersetprionSheet";
import React, { Suspense, lazy } from "react";
const ProjectView = lazy(() => import("@/components/project/ProjectView"));

export default function BlogViewInterseption({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return (
    <IntersetprionSheet>
      <Suspense fallback={"loading..."}>
        <ProjectView slug={slug} />
      </Suspense>
    </IntersetprionSheet>
  );
}
