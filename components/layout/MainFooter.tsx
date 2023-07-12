import React from "react";
import { MainNavItem } from "./MainNavbar";
import { EnvelopeClosedIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const MainFooter = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="p-4 border-t w-full">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center gap-5">
        <div className="md:pl-4 flex justify-between w-full">
          <MainNavItem />
          <div className="flex gap-4">
            <EnvelopeClosedIcon />
            <GitHubLogoIcon />
          </div>
        </div>
        <div>iwwwan</div>
        <div className="text-sm text-muted-foreground">
          &copy; Copyright Iwwwan {date}
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
