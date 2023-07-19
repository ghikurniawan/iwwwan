"use client";

import { useEffect, useRef, useState } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import { TiptapEditorProps } from "./props";
import { TiptapExtensions } from "./extensions";
import useLocalStorage from "@/lib/hooks/use-local-storage";
import { useDebouncedCallback } from "use-debounce";
import { useCompletion } from "ai/react";
import { toast } from "sonner";
import va from "@vercel/analytics";
import DEFAULT_EDITOR_CONTENT from "./default-content";
import { EditorBubbleMenu } from "./components";
import { getPrevText } from "@/lib/editor";
import { ScrollArea } from "../ui/scroll-area";

interface IEditorProps {
  // eslint-disable-next-line no-unused-vars
  onEditor?: (editor: Editor) => void;
  // eslint-disable-next-line no-unused-vars
  onSavedStatus?: (arg: string) => void;
  editable?: boolean;
  autofocus?: boolean | "start" | "end";
  content?: object;
}

export default function NovelEditor({
  onEditor,
  onSavedStatus,
  editable = true,
  autofocus = "end",
  content,
}: IEditorProps) {
  const [defaultContent, setDefaultContent] = useLocalStorage(
    "content",
    DEFAULT_EDITOR_CONTENT
  );

  const [saveStatus, setSaveStatus] = useState("Saved");

  const [hydrated, setHydrated] = useState(false);
  const debouncedUpdates = useDebouncedCallback(async ({ editor }) => {
    if (editable) {
      const json = editor.getJSON();
      setSaveStatus("Saving...");
      setDefaultContent(json);
      // Simulate a delay in saving.
      setTimeout(() => {
        setSaveStatus("Saved");
      }, 500);
    }
  }, 750);

  const editor = useEditor({
    extensions: TiptapExtensions,
    editorProps: TiptapEditorProps,
    editable,
    onUpdate: (e) => {
      setSaveStatus("Unsaved");
      const selection = e.editor.state.selection;
      const lastTwo = getPrevText(e.editor, {
        chars: 2,
      });
      if (lastTwo === "++" && !isLoading) {
        e.editor.commands.deleteRange({
          from: selection.from - 2,
          to: selection.from,
        });
        complete(
          getPrevText(e.editor, {
            chars: 5000,
          })
        );
        // complete(e.editor.storage.markdown.getMarkdown());
        va.track("Autocomplete Shortcut Used");
      } else {
        debouncedUpdates(e);
      }
    },
    autofocus,
  });

  useEffect(() => {
    onEditor && onEditor(editor);
  }, [editor, onEditor]);

  useEffect(() => {
    onSavedStatus && onSavedStatus(saveStatus);
  }, [saveStatus, onSavedStatus]);

  const { complete, completion, isLoading, stop } = useCompletion({
    id: "novel",
    api: "/api/generate",
    onFinish: (_prompt, completion) => {
      editor?.commands.setTextSelection({
        from: editor.state.selection.from - completion.length,
        to: editor.state.selection.from,
      });
    },
    onError: (err) => {
      toast.error(err.message);
      if (err.message === "You have reached your request limit for the day.") {
        va.track("Rate Limit Reached");
      }
    },
  });

  const prev = useRef("");

  // Insert chunks of the generated text
  useEffect(() => {
    const diff = completion.slice(prev.current.length);
    prev.current = completion;
    editor?.commands.insertContent(diff);
  }, [isLoading, editor, completion]);

  useEffect(() => {
    // if user presses escape or cmd + z and it's loading,
    // stop the request, delete the completion, and insert back the "++"
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || (e.metaKey && e.key === "z")) {
        stop();
        if (e.key === "Escape") {
          editor?.commands.deleteRange({
            from: editor.state.selection.from - completion.length,
            to: editor.state.selection.from,
          });
        }
        editor?.commands.insertContent("++");
      }
    };
    const mousedownHandler = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      stop();
      if (window.confirm("AI writing paused. Continue?")) {
        complete(editor?.getText() || "");
      }
    };
    if (isLoading) {
      document.addEventListener("keydown", onKeyDown);
      window.addEventListener("mousedown", mousedownHandler);
    } else {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", mousedownHandler);
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", mousedownHandler);
    };
  }, [stop, isLoading, editor, complete, completion.length]);

  // Hydrate the editor with the content from localStorage.
  useEffect(() => {
    if (editor && defaultContent && !hydrated) {
      editor.commands.setContent(content ?? defaultContent);
      setHydrated(true);
    }
  }, [editor, defaultContent, hydrated, content]);

  return (
    <ScrollArea
      scrollHideDelay={300}
      onClick={() => {
        editable && editor?.chain().focus().run();
      }}
      className="min-h-[600px] w-full mt-2 rounded-md border p-2"
    >
      {editor && <EditorBubbleMenu editor={editor} />}
      <EditorContent editor={editor} />
    </ScrollArea>
  );
}
