import IntersetprionSheet from "@/components/shared/IntersetprionSheet";
import { Suspense, lazy } from "react";
const BlogView = lazy(() => import("@/components/blog/BlogView"));

export default function BlogViewInterseption({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  return (
    <IntersetprionSheet>
      <Suspense fallback={"loading..."}>
        <BlogView slug={slug} />
      </Suspense>
    </IntersetprionSheet>
  );
}
