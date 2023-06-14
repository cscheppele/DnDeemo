import { NextResponse } from "next/server";
import prisma from '../../../../libs/prismadb'

//the proper format of these queries is suspect, not entirely sure what the new nextjs
//wants.  these work, but I feel I should have the res param being used instead of 
//the return.  I also need to figure out the proper return types, I believe there are
//"Request" and "Response" types.

export async function POST(req: any) {
  try{
    const body = await req.json();
    body.createdOn = new Date();
    const storyCreated = await prisma.message.create({data : body})
    return new NextResponse(JSON.stringify(storyCreated));
  } catch (err) {
    console.log("error posting to prisma db", err)
  }
}

//this get function proved to be extremely frustrating to call.  I was unable to call it
//anywhere inside of an actual component, even if it was nested in another function, because
//"prisma is unable to be called in the browser window" I was able to use it in the open ai
//api file though and take the response of this get and send it directly to the ai, 
export async function GET(req: any) {
  try {
    const story = await prisma.message.findMany()
    return new NextResponse(JSON.stringify(story))
  } catch (err) {
    console.log("could not get messages from prisma: ", err)
  }
}