"use client"

import React from 'react'
import Google from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  return (
    <>
        <Button variant="outline" size="lg" onClick={() => signIn("google")}>
            <Google className="mr-4" />
            Signin with Google
        </Button>
        <Button variant="outline" size="lg" onClick={() => signIn("github")}>
            <GitHubLogoIcon className="mr-4" />
            Signin with Github
        </Button>
    </>
  )
}
