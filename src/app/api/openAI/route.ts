import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

import prisma from '../../../../libs/prismadb'

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);

const initialOpenAiPrompt =
`You, the ai, will be acting as the Dm for a dnd 5e battle scene for the user.  
The user is new to dnd and will be playing a level 2 fighter with chainmail and a 
longsword.  the user's stats are {str: 16, con: 15, dex: 14, int:11, wis:13, cha: 9} with 
16 base health.   For this battle scene the user is in a field and have been attacked by 
two level 1 wolves.  Please guide the user through this battle scene, asking the user for 
any appropriate skill checks or dice rolls, specifying the die required and explaining 
why you are asking for that skill check/roll.  please remember, you should never play/roll 
for the user, always ask them to take necessary actions on their turn.  you will, however, 
be controlling the wolves. please also explain any rolls/actions made by the wolves.  
Let's begin. please set the scene and ask for an initiative roll to begin.`

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
