// import main from "./pgdbApiService";
// import { prisma } from "./pgdbApiService";

import prisma from '../../../../libs/prismadb'

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);

const initialOpenAiPrompt ="You will be acting as the Dm for a dnd 5e campaign. You are going to get some previous messages from the campaign, give the next scenario that follows from the actual campaign."

// let messages= [];
// main().then(response => {
//   messages = response.json()
// })

// async function messages () {
  //   return await main()
  // }
  
  export async function GET(_req: any){
    let messages: any[];

  try {
    messages = await prisma.message.findMany()
    console.log('do you see me?')
  } catch (err) {
    console.log("could not get messages.", err);
    messages = []
  }

  messages = messages.map(msg => {
    let newMsg: any = {};
    newMsg.role = 'user';
    newMsg.content = `${msg.author}-${msg.content}`
    return newMsg;
  })

  console.log("API KEY ==> ", process.env.OPEN_API_KEY)

  return openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "system" , "content":  initialOpenAiPrompt},
        ...messages],
    })
    .then((completion:any) => {
      console.log(completion.data.choices[0].message)
      //return completion.data.choices[0].message;
    }).catch((err:any) => console.log("IS THIS THE ERROR ==> ",err))
    // .then(async() => {
    //   console.log("in then of main")
    //   await prisma.$disconnect()
    // })
    // .catch(async (e) => {
    //   console.error(e);
    //   await prisma.$disconnect();
    //   process.exit(1);
    // })
  
//   // history: {
//   //   role: string,
//   //   content: string,  
//   //   name: string,
//   // }[]) {
//   // fetch()

}
