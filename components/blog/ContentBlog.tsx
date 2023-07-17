import { getDelay } from "@/lib/getDelai";
import { TypeBlog } from "@/types";
import { FC, lazy } from "react";

const PostCard = lazy(() => import("@/components/blog/PostCard"));

const ContentBlog: FC<{ blogs: TypeBlog[] }> = async ({ blogs }) => {
  // Simulating an asynchronous API call with a Promise
  const promise = await getDelay();
  return (
    <>
      {promise && blogs?.map((post) => <PostCard key={post?.id} blog={post} />)}
    </>
  );
};

export default ContentBlog;
