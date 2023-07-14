"use client"

import React from "react";
import { MainNavItem } from "./MainNavbar";
import { EnvelopeClosedIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useSession } from "next-auth/react";
import IwwwanLogo from "../icons/iwwwan";
import { usePathname } from "next/navigation";

const MainFooter = () => {
  const {data : session} = useSession()
  const date = new Date().getFullYear();
  const pathname = usePathname()

  return (
    <footer className="p-4 border-t w-full">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center gap-5">
        <div className="md:pl-4 flex justify-between w-full">
          <MainNavItem />
        </div>
          <Link href={'/'}>
            <IwwwanLogo className="hover:fill-accent-pink" />
          </Link>
          <div className="flex gap-4 w-full justify-center">
            <Link href={'/email'} className="hover:text-accent-pink">
              <EnvelopeClosedIcon className="w-6 h-6" />
            </Link>
            <Link href={'/github'} className="hover:text-accent-pink">
              <GitHubLogoIcon className="w-6 h-6" />
            </Link>
          </div>
        <div className="text-sm text-muted-foreground">
          &copy; Copyright Iwwwan {date} &nbsp;
          {! session && (
            <Link href={`/auth/signin?callbackUrl=${pathname}`}>
              {`>>`}
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
