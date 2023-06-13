import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

import prisma from '../../../../libs/prismadb'

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);

const initialOpenAiPrompt ="You will be acting as the Dm for a dnd 5e campaign. You are going to get some previous messages from the campaign, give the next scenario that follows from the actual campaign."
export async function GET(_req: any){
  let messages: any[];

  try {
    messages = await prisma.message.findMany()
  } catch (err) {
    console.log("could not get messages.", err);
    messages = []
  }

  messages = messages.map(msg => {
    let newMsg: any = {};
    newMsg.role = msg.role;
    newMsg.content = `${msg.author}-${msg.content}`
    // console.log("newMsg ==> ",newMsg);
    return newMsg;
  })
  
  console.log("messages ==> ", messages)
  
  let completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "system" , "content":  initialOpenAiPrompt},
        ...messages],
    })
    // .then(async (completion:any) => {
      console.log("completion.data.choices[0].message")
      console.log(completion.data.choices[0].message)
      await prisma.message.create({data: {
        createdOn: new Date(), 
        contentType: "answer", 
        role: completion.data.choices[0].message.role,
        content: completion.data.choices[0].message.content }})
        
      return new NextResponse( JSON.stringify(completion.data.choices[0].message));
    // .catch((err:any) => console.log("IS THIS THE ERROR ==> ",err))
  
  // console.log("aiResponse: ", aiResponse);
  // return aiResponse;

}
