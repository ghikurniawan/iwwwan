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

export default function MainNavbar() {
  const {data : session} = useSession()
  const scrolled = useScroll(20);
  return (
    <>
      <nav
        className={`${
          scrolled ? "border-b  bg-background/50 backdrop-blur-xl " : ""
        } fixed top-0 h-16 w-full  z-30 transition-all`}
      >
        {/* <div className="w-full h-2 bg-gradient-to-r from-green-500 to-cyan-500"/> */}
        <div className="max-w-screen-xl px-4 w-full h-full mx-auto flex justify-between items-center">
          <MainNavItem />
          <div className="flex gap-2">
            {session && (
              <Button variant="outline" size="icon" onClick={() => signOut()}>
              <ExitIcon />
              </Button>
            )}
            <ModeToggle />
          </div>
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
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {MainNavItemsConstant.map((item) => (
        <Link
          key={item.id}
          href={item.path}
          className={`${
            pathName === item.path
              ? "font-bold text-accent-pink"
              : "font-medium text-muted-foreground"
          } text-sm transition-colors hover:text-accent-pink`}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
