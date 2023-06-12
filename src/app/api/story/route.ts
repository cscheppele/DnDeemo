import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import prisma from '../../../../libs/prismadb'

export async function POST(req: any) {
  const body = await req.json();
  body.createdOn = new Date();
  console.log(body)
  const storyCreated = await prisma.message.create({data : body})
  console.log(storyCreated)
  return new NextResponse(JSON.stringify(storyCreated));
}