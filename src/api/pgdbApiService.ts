import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export default async function main(){
//   const allRooms = await prisma.gameRoom.findMany()
//   const newRoom = await prisma.gameRoom.create()
//   const removeRoom = await prisma.gameRoom.delete()
  
//   const allPlayers = await prisma.player.findMany()
//   const addPlayer = await prisma.player.create()
//   const removePlayer = await prisma.player.delete()
  try {
    const allMessages = await prisma.message.findMany()
    console.log('do you see me?')
    return allMessages
  } catch (err) {
    console.log("could not get messages.", err);
    return [];
  }
} 

main()
  .then(async() => {
    console.log("in then of main")
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })