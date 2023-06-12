import main from "./pgdbApiService";
import { prisma } from "./pgdbApiService";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
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
  
  export default async function storyMaker(){
    let messages: any[];

  try {
    messages = await prisma.message.findMany()
    console.log('do you see me?')
  } catch (err) {
    console.log("could not get messages.", err);
    messages = []
  }

  messages = messages.map(msg => {
    msg.role = 'user';
    msg.content = `${msg.content}-${msg.content}`
    return msg;
  })

  return openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "system" , "content":  initialOpenAiPrompt},
        ...messages],
    })
    .then((completion) => {
      console.log(completion)
      return completion.data.choices[0].message;
    })
    .then(async() => {
      console.log("in then of main")
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    })
  
//   // history: {
//   //   role: string,
//   //   content: string,  
//   //   name: string,
//   // }[]) {
//   // fetch()

}
