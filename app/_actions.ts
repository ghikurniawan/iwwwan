'use server'

import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import prisma from "@/lib/prisma";

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
                    username: true
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
                    username: true
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

export {
    getServerSessionAction,
    getAllBlogPostAction,
    getBlogPostBySlugAction,
    getAllSlug
};