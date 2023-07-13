'use server'

import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"

export async function getServerSessionAction(){
    const session = await getServerSession(authOptions)
    return session
}