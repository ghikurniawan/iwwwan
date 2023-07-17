import ShortPost from "@/components/blog/ShortPost";
import Section from "@/components/shared/Section";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { getAllBlog } from "@/lib/model/getAllBlog";
import { Suspense, lazy } from "react";

const PostCard = lazy(() => import("@/components/blog/PostCard"));

export default async function Blog() {
  const blogs = await getAllBlog(9);
  return (
    <Section className="py-20 space-y-4 flex-initial min-h-screen">
      <h2 className="text-4xl my-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
        Blog
      </h2>
      <p className="text-muted-foreground">
        Thoughts, mental models, and tutorials about front-end development.
      </p>
      <div className="flex gap-4">
        <Input type="text" placeholder="Search..." />
        <ShortPost />
      </div>
      <div className="inline-flex h-6 text-sm">
        <p className="block">Choose topic:</p>
        <div className="flex flex-wrap gap-2 ml-2">
          <Badge variant={"secondary"}>Tag1</Badge>
          <Badge variant={"secondary"}>Tag2</Badge>
          <Badge variant={"secondary"}>Tag3</Badge>
          <Badge variant={"secondary"}>Tag4</Badge>
          <Badge variant={"secondary"}>Tag5</Badge>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Suspense fallback={"loading..."}>
          {blogs.map((post) => (
            <PostCard key={post?.id} blog={post} />
          ))}
        </Suspense>
      </div>
    </Section>
  );
}
