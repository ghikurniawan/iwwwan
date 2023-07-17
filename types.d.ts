import type { Prisma } from "@prisma/client";

export declare type JsonValue =
  | string
  | number
  | boolean
  | null
  | Prisma.JsonObject
  | Prisma.JsonArray


export declare type TypeBlog = {
  id: string;
  title: string;
  content: JsonValue;
  slug: string;
  thumbnail: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  authorId: string;
  author: { username: string };
  stats: { slug: string; likes: number; views: number };
  tag: { tagName: string }[];
}