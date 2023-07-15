"use client";

import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

import React, { FC, ReactNode, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

const IntersetprionSheet: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const handleOpen = () => {
    setOpen(false);
    router.back();
  };
  return (
    <Sheet open={open} onOpenChange={handleOpen}>
      <SheetTrigger></SheetTrigger>
      <SheetContent side="bottom">
        <ScrollArea className="h-[90vh] px-4">
          <div className="w-full max-w-screen-xl mx-auto">
            {/* <SheetHeader>
              <SheetTitle>Authentication Context</SheetTitle>
              <SheetDescription>
                Great way to structure authentication context in React apps.
              </SheetDescription>
            </SheetHeader> */}
            {children}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default IntersetprionSheet;
