import React from "react";

export default function ProjectView({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return <div>ProjectView : {slug}</div>;
}
