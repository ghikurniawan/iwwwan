import React from "react";

export default function ProjectView({ params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log("project ori");
  return <div>ProjectView : {slug}</div>;
}
