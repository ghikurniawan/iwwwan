"use client";

import { Editor } from "@tiptap/react";
import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  // MenubarCheckboxItem,
  // MenubarRadioGroup,
  // MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

const NovelEditor = lazy(() => import("@/components/editor"));

export default function EditorPage() {
  const [editor, setEditor] = useState<Editor>();
  const [canEdit, setCanEdit] = useState(true);
  const [saveStatus, setSaveStatus] = useState('"Saved"');

  useEffect(() => {
    editor?.setEditable(canEdit);
  }, [editor, canEdit]);

  return (
    <>
      <div className="min-h-[500px] w-full max-w-screen-xl border p-4 sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg">
        <div className="flex justify-between items-center">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem
                  onClick={() => {
                    setCanEdit(false);
                  }}
                >
                  Publish
                </MenubarItem>
                <MenubarItem
                  onClick={() => {
                    setCanEdit(true);
                  }}
                >
                  Edit
                </MenubarItem>
                {/* <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem> */}
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Find</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Search the web</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Find...</MenubarItem>
                    <MenubarItem>Find Next</MenubarItem>
                    <MenubarItem>Find Previous</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <div
            className={`text-muted-foreground px-2 py-1 text-sm rounded-lg ${
              saveStatus === "Saved"
                ? "border-green-600 border text-green-600"
                : ""
            }`}
          >
            {saveStatus}
          </div>
        </div>
        <Suspense fallback={"loading..."}>
          <NovelEditor
            onEditor={(editor) => setEditor(editor)}
            onSavedStatus={(save: string) => setSaveStatus(save)}
          />
        </Suspense>
      </div>
    </>
  );
}
