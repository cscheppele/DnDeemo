import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import prisma from '../../../../libs/prismadb'


export async function POST(req: any) {
  try{
    const body = await req.json();
    body.createdOn = new Date();
    // console.log(body)
    const storyCreated = await prisma.message.create({data : body})
    // console.log("story Created: :",storyCreated)
    return new NextResponse(JSON.stringify(storyCreated));
  } catch (err) {
    console.log("error posting to prisma db", err)
  }
}

export async function GET(req: any) {
  const story = await prisma.message.findMany()
  // console.log("story: ", story);
  return new NextResponse(JSON.stringify(story))
}