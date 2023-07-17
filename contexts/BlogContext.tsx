"use client";

import { TypeBlog } from "@/types";
import React, {
  createContext,
  useState,
  useContext,
  FC,
  ReactNode,
} from "react";

// Define the shape of the context
interface BlogContextType {
  blog: TypeBlog;
  // eslint-disable-next-line no-unused-vars
  setBlog: React.Dispatch<React.SetStateAction<TypeBlog>>;
}

// Create the context with an initial state
const BlogContext = createContext<BlogContextType>({
  blog: {
    id: "",
    title: "",
    content: "",
    slug: "",
    thumbnail: "",
    createdAt: undefined,
    updatedAt: undefined,
    published: false,
    authorId: "",
    author: {
      username: "",
    },
    stats: {
      slug: "",
      likes: 0,
      views: 0,
    },
    tag: [],
  },
  setBlog: () => {},
});

// Export a custom hook to access the context
export const useBlogContext = () => useContext(BlogContext);

// Create a provider component to wrap your app
export const BlogProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [blog, setBlog] = useState<TypeBlog>();

  return (
    <BlogContext.Provider value={{ blog, setBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
