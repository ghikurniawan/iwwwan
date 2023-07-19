"use client";

import { Editor } from "@tiptap/react";
import React, { Suspense, lazy, useEffect, useState, useRef, FC } from "react";
import {
  Cross1Icon,
  UpdateIcon,
  ReloadIcon,
  CheckIcon,
  CircleIcon,
} from "@radix-ui/react-icons";
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
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useLocalStorage from "@/lib/hooks/use-local-storage";
import { CreateBlog, createBlogAction } from "../_actions";
import { separateTextToArray } from "@/lib/spareteTextToArray";
import { useDebouncedCallback } from "use-debounce";
import { isValidImage } from "@/lib/isValidImage";
import { toast } from "sonner";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Group, InputGroup, Label } from "@/components/ui/input-group";

const NovelEditor = lazy(() => import("@/components/editor"));

const DEFAULT_METADATA = {
  title: "",
  thumbnail: "",
  slug: "",
  authorId: "",
  tag: [],
  publish: false,
};

export default function EditorPage() {
  const [defaultMetadata, setDefaultMetadata] = useLocalStorage(
    "metadata",
    DEFAULT_METADATA
  );
  const { data: sessionData, status } = useSession();
  const [editor, setEditor] = useState<Editor>();
  const [saveStatus, setSaveStatus] = useState('"Saved"');
  const [canEdit, setCanEdit] = useState(true);
  const [manualSlug, setMalualSlug] = useState(false);
  const [validImage, setValidImage] = useState(false);
  const [statusImage, setStatusImage] = useState(false);

  useEffect(() => {
    editor?.setEditable(canEdit);
  }, [editor, canEdit]);

  const debouncedUpdatesImage = useDebouncedCallback(async () => {
    if (defaultMetadata.thumbnail === "") return;
    const valid = await isValidImage(defaultMetadata.thumbnail);
    if (valid) {
      setValidImage(true);
      setStatusImage(false);
    } else {
      toast.error("Invalid image URL.");
      setValidImage(valid);
      setDefaultMetadata({
        ...defaultMetadata,
        thumbnail: "",
      });
      setStatusImage(false);
    }
  }, 3000);

  useEffect(() => {
    if (defaultMetadata.thumbnail !== "") {
      setStatusImage(true);
      debouncedUpdatesImage();
    }
  }, [debouncedUpdatesImage, defaultMetadata.thumbnail]);

  const handlePublish = async () => {
    const data: CreateBlog = {
      ...defaultMetadata,
      content: editor.getJSON(),
      authorId: sessionData?.user.id,
      publish: true,
    };
    const string = JSON.stringify(data);
    const parse = JSON.parse(string);
    const publish = await createBlogAction(parse);
    if (publish) {
      toast.success("Post Created");
      setDefaultMetadata(DEFAULT_METADATA);
    } else {
      toast.error("Someting went wrong");
    }
  };

  const handleTitleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(manualSlug);
    setDefaultMetadata({
      ...defaultMetadata,
      title: e.target.value,
      slug: manualSlug ? defaultMetadata.slug : createSlug(e.target.value),
    });
  };

  const handleTagsUpdate = (tags: string[]) => {
    setDefaultMetadata({
      ...defaultMetadata,
      tag: [...new Set(tags)],
    });
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMalualSlug(true);
    setDefaultMetadata({
      ...defaultMetadata,
      slug: createSlug(e.target.value),
    });
  };
  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatusImage(true);
    setDefaultMetadata({
      ...defaultMetadata,
      thumbnail: e.target.value,
    });
    debouncedUpdatesImage();
  };

  function createSlug(title: string) {
    return title
      .toLowerCase() // Mengubah menjadi huruf kecil
      .replace(/[^a-z0-9]+/g, "-"); // Menghapus karakter non-alfanumerik dan mengganti spasi dengan '-'
    // .replace(/^-+|-+$/g, ""); // Menghapus tanda '-' dari awal dan akhir
  }

  return (
    <>
      <div className="min-h-[500px] space-y-2 w-full max-w-screen-xl border p-4 sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg">
        <div className="flex justify-between items-center">
          {status === "loading" && (
            <Button size="sm" variant="outline" disabled>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          )}
          {status === "unauthenticated" ||
            (sessionData?.user.role === "user" && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => setCanEdit(!canEdit)}
              >
                {canEdit ? "Editable" : "Read only"}
              </Button>
            ))}
          {status === "authenticated" && sessionData?.user.role !== "user" && (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem onClick={handlePublish}>Publish</MenubarItem>
                  <MenubarItem
                    onClick={() => {
                      setCanEdit(true);
                    }}
                  >
                    Edit
                  </MenubarItem>
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
          )}

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
        {canEdit && (
          <div className=" w-full bg-card border p-2 space-y-2">
            <Input
              id="title"
              type="text"
              onChange={handleTitleUpdate}
              value={defaultMetadata?.title}
              placeholder="Title"
            />
            <span className="text-xs ml-2 text-muted-foreground">
              Max 60 Character
            </span>
            <Input
              value={defaultMetadata?.slug}
              onChange={handleSlugChange}
              type="text"
              placeholder="Slug"
            />
            <span className="text-xs ml-2 text-muted-foreground">
              Automatic slug or edit manual
            </span>
            <Group>
              <Label htmlFor="input-goup">
                {statusImage ? (
                  <UpdateIcon className="h-4 w-4 animate-spin" />
                ) : validImage ? (
                  <CheckIcon className="h-4 w-4 text-green-400" />
                ) : (
                  <CircleIcon className="h-4 w-4" />
                )}
              </Label>
              <InputGroup
                onChange={handleThumbnailChange}
                value={defaultMetadata?.thumbnail}
                placeholder="Place link thumbnail here.."
                id="input-goup"
                type="text"
              />
            </Group>
            <span className="text-xs ml-2 text-muted-foreground">
              Must valid link image
            </span>
            <TagsInput
              defaultTags={defaultMetadata?.tag}
              onTagsUpdate={handleTagsUpdate}
            />
            <span className="text-xs ml-2 text-muted-foreground">
              Max 3 tags
            </span>
          </div>
        )}
        {defaultMetadata.thumbnail && validImage && (
          <AspectRatio ratio={21 / 9} className="relative">
            <Suspense
              fallback={
                <div className="w-full h-full bg-secondary animate-pulse rounded-xl"></div>
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={defaultMetadata.thumbnail}
                alt={defaultMetadata.title}
                draggable={false}
                className="rounded-md w-full h-full object-cover -z-0"
              />
            </Suspense>
          </AspectRatio>
        )}
        <header className="mt-6">
          <h1 className="text-xl font-bold">{defaultMetadata?.title}</h1>
        </header>
        <Suspense
          fallback={
            <div className="w-full h-full animate-pulse bg-secondary"></div>
          }
        >
          <NovelEditor
            onEditor={(editor) => setEditor(editor)}
            onSavedStatus={(save: string) => setSaveStatus(save)}
          />
        </Suspense>
      </div>
    </>
  );
}

const TagsInput: FC<{
  defaultTags: string[];
  // eslint-disable-next-line no-unused-vars
  onTagsUpdate: (arg: string[]) => void;
}> = ({ onTagsUpdate, defaultTags }) => {
  const [tagInput, setTagInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    inputRef.current.focus(); // Focus the input when the div is clicked
  };

  const handleTagInput = (e) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = () => {
    if (tagInput.trim() !== "") {
      const newTag = separateTextToArray(tagInput);
      onTagsUpdate && onTagsUpdate([...defaultTags, ...newTag]);
      setTagInput("");
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    if (pastedText.trim() !== "") {
      const newTag = separateTextToArray(pastedText);
      onTagsUpdate && onTagsUpdate([...defaultTags, ...newTag]);
      inputRef.current.value = "";
    }
  };

  const handleRemoveTag = (tag) => {
    onTagsUpdate(defaultTags.filter((t) => t !== tag));
  };

  return (
    <div
      onClick={handleFocus}
      className="flex flex-wrap items-center gap-2 p-2 border rounded-lg"
    >
      {defaultTags.map((tag, index) => (
        <span
          key={index}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground"
        >
          {tag}
          <button
            className="ml-2 focus:outline-none"
            onClick={() => handleRemoveTag(tag)}
          >
            <Cross1Icon />
          </button>
        </span>
      ))}
      <Input
        type="text"
        ref={inputRef}
        value={tagInput}
        onChange={handleTagInput}
        onPaste={handlePaste}
        placeholder="Enter tags here"
        className="w-full min-w-fit border-none focus-visible:ring-0"
        onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
      />
    </div>
  );
};
