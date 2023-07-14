import React from "react";

export default function BlogView({ params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log("blog Ori");
  return <div>BlogView : {slug}</div>;
}
