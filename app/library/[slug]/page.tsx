import React from "react";

export default function LibraryView({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return <div>BlogView : {slug}</div>;
}
