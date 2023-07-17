"use client";

import useScroll from "@/lib/hooks/use-scroll";
import React from "react";
import { ModeToggle } from "../ToggleDarkMode";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { MainNavItemsConstant } from "@/constants";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { ExitIcon } from "@radix-ui/react-icons";
import IwwwanLogo from "../icons/iwwwan";

export default function MainNavbar() {
  const { data: session } = useSession();
  const scrolled = useScroll(20);
  return (
    <>
      <nav
        className={`${
          scrolled ? "border-b bg-background/50 backdrop-blur-xl " : ""
        } sticky top-0 w-full h-[10vh] z-40 transition-all`}
      >
        {/* <div className="w-full h-2 bg-gradient-to-r from-green-500 to-cyan-500"/> */}
        <div className="max-w-screen-xl px-4 py-2 w-full mx-auto flex justify-between items-center">
          <Link href={"/"} aria-label="Logo">
            <IwwwanLogo className="hover:fill-accent-pink" />
          </Link>
          <div className="flex gap-2">
            {session && (
              <Button variant="outline" size="icon" onClick={() => signOut()}>
                <ExitIcon />
              </Button>
            )}
            <ModeToggle />
          </div>
        </div>
        <div className="py-1 max-w-screen-xl px-4 w-full mx-auto flex justify-between items-center">
          <MainNavItem />
        </div>
      </nav>
    </>
  );
}

export function MainNavItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathName = usePathname();
  return (
    <nav
      className={cn("flex items-end space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href={"/"}
        className={`${
          pathName === "/"
            ? "font-bold text-accent-pink border-b border-accent-pink"
            : "font-medium text-muted-foreground"
        } text-sm transition-colors hover:text-accent-pink py-1`}
      >
        Home
      </Link>
      {MainNavItemsConstant.map((item) => (
        <Link
          key={item.id}
          href={item.path}
          className={`${
            pathName.startsWith(item.path) || pathName === item.path
              ? "font-bold text-accent-pink border-b border-accent-pink"
              : "font-medium text-muted-foreground"
          } text-sm transition-colors hover:text-accent-pink py-1`}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
