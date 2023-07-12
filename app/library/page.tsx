import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClockIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Library() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Snippets />
      <Snippets />
      <Snippets />
      <Snippets />
      <Snippets />
    </div>
  );
}

const Snippets = () => {
  return (
    <Card className="group transition-all overflow-hidden hover:scale-105 bg-card w-full relative">
      <Link href={"/"} className="inset-0 absolute w-full h-full"></Link>
      <CardHeader className="space-y-6">
        <CardTitle>Back To Basic: Mental Model to Understand Flexbox</CardTitle>
        <div className="flex gap-4">
          <Badge
            variant={"secondary"}
            className="pl-0 bg-inherit text-muted-foreground"
          >
            <ClockIcon className="mr-2" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
              6 min read
            </span>
          </Badge>
          <Badge
            variant={"secondary"}
            className="pl-0 bg-inherit text-muted-foreground"
          >
            <EyeOpenIcon className="mr-2" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
              7.750 Views
            </span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>July 19, 2021</CardTitle>
        <p className="mt-4">
          These are the mental models that I use to really understand flexbox,
          and I hope these can help you to understand too.
        </p>
      </CardContent>
    </Card>
  );
};
