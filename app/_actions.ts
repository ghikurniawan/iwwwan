'use server'

import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import prisma from "@/lib/prisma";

export async function getServerSessionAction(){
    const session = await getServerSession(authOptions)
    return session
}

export async function verificationTokenSession(sessionToken : string){
    const res = await prisma.session.findUnique({where : {sessionToken : sessionToken}})
    return res
}