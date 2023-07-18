'use server'

import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

const getServerSessionAction = async () => {
    const session = await getServerSession(authOptions)
    return session
}

const getAllBlogPostAction = async (take = 10) => {
    const res = await prisma.blog.findMany({
        where: {
            published: true
        },
        include: {
            author: {
                select: {
                    username: true,
                    name: true,
                    image: true
                }
            },
            stats: true,
            tag: {
                select: {
                    tagName: true
                }
            }
        },
        take: take
    })
    return res
}

const getBlogPostBySlugAction = async (slug: string) => {
    const res = await prisma.blog.findUnique({
        where: {
            slug
        },
        include: {
            author: {
                select: {
                    username: true,
                    name: true,
                    image: true
                }
            },
            stats: true,
            tag: {
                select: {
                    tagName: true
                }
            }
        },
    })
    return res
}

const getAllSlug = async () => {
    const res = await prisma.blog.findMany({
        where: {
            published: true
        },
        select: {
            slug: true
        }
    })
    return res
}


const statViewAction = async (slug: string) => {
    const { views } = await prisma.stats.findFirst({
        where: {
            slug
        },
        select: {
            views: true
        }
    })

    await prisma.stats.update({
        where: {
            slug
        },
        data: {
            views: views + 1
        },
        select: {
            views: true
        }
    })
}

//   id        String @id @default (cuid())
//   title     String
//   content   Json ?
//   slug      String @unique
//   stats     Stats @relation(fields: [slug], references: [slug])
//   thumbnail String ?
//   createdAt DateTime @default (now())
//   updatedAt DateTime @updatedAt
//   published Boolean @default (false)
//   authorId  String
//   author    User @relation(fields: [authorId], references: [id])
//   tag       Tag[]

export type CreateBlog = {
    title: string;
    content: Prisma.JsonValue;
    slug: string;
    thumbnail: string;
    authorId: string;
    tag: string[],
    publish: boolean
}

const createBlogAction = async ({
    title,
    thumbnail,
    content,
    slug,
    authorId,
    tag,
    publish
}: CreateBlog) => {
    try {
        const res = await prisma.blog.create({
            data: {
                title,
                thumbnail,
                content: content,
                stats: {
                    create: {
                        slug
                    }
                },
                author: {
                    connect: {
                        id: authorId
                    }
                },
                tag: {
                    createMany: {
                        data: tag.map((item) => ({ tagName: item }))
                    }
                },
                published: publish
            }
        })
        return res
    } catch (err) {
        console.log(err)
        return
    }
}

export {
    getServerSessionAction,
    getAllBlogPostAction,
    getBlogPostBySlugAction,
    getAllSlug,
    statViewAction,
    createBlogAction
};


