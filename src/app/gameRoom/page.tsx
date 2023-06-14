'use client'

import styles from '../../styles/gameRoom.module.css'
// import Image from 'next/image'
import PlayerStats from '@/components/playerStats'
import StoryBox from '@/components/storyBox'
import Link from 'next/link'
import Image from 'next/image'

export default function GameRoom(){
  function handleEndGame(){
    //await prisma.message.deleteMany(gameRoom.id = this gameroom.id);
    //await prisma.player.delete()
    //await prisma.gameRoom.delete() if this gameRoom has no more players in it.
    //await prisma.character.delete()
    //you can delete all of these at once if they are related in the db I think, but I'm
    //not sure if I want the players and characters deleted when they leave the room or if
    //they should have the chance to rejoin the room with the same character or not as
    //long as the room is still open.
  }

  //dungeon map and dicebox should be their own components
  //within dicebox I was hoping to have a visual of dice rolling and the dice rolled would depend on 
  //the action taken by the player. showing the appropriate type and number of dice.  since dice box
  //is currently tucked into the corner, I was thinking it should pop up and expand to the middle when 
  //the dice are actually rolling for an easier visual for beginners to follow.

  //icons should be moved into dungeon map component and photos corresponding to player and their
  //chosen icon.  the icons should display in a random arrangement, grouped in a specific location
  // of the map depending on whether they are a player character, or enemy.  so I might need move the 
  //position styling of the icons to inline styling and use a function to generate random coordinates 
  //for each character within a given area.

  return (
    <div className={styles.game_room}>
      <PlayerStats/>
      <div className={styles.dungeon_map}/>
      {/* use a basic image for now, up next is icon movement for players, only allowed for the dm and the specific player
       then possibly introducing interactive obstacles, such as trees or rocks and handle object collision,
       step three is look at dungeon alchemist to see if I can pull in its dungeon creation algorithm. */}
      <Image className={styles.player_icon} src={'/../public/fighter-profile.jpeg'} alt="player 1 icon" width={50} height={50}/>
      <Image className={styles.wolf1_icon} src={'/../public/wolf-icon.jpeg'} alt="wolf 1 icon" width={50} height={50}/>
      <Image className={styles.wolf2_icon} src={'/../public/wolf-icon.jpeg'} alt="wolf 2 icon" width={50} height={50}/>
      <div className={styles.dice_box}>
      {/* <Image className={styles.d20_icon} src={'/../public/d20.jpeg'} alt="d20 icon" width={50} height={50}/>
      <Image className={styles.d6_icon} src={'/../public/d6.jpeg'} alt="d20 icon" width={50} height={50}/> */}
      </div>
      <StoryBox/>
      <Link href='/' className={styles.end_game} onClick={handleEndGame}>X</Link>
    </div>
  )
}