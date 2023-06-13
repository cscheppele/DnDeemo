import styles from '../../styles/gameRoom.module.css'
// import Image from 'next/image'
import PlayerStats from '@/components/playerStats'
import StoryBox from '@/components/storyBox'
import Link from 'next/link'
import Image from 'next/image'

export default function GameRoom(){
  return (
    <div className={styles.game_room}>
      <PlayerStats/>
      <div className={styles.dungeon_map}/>
      <Image className={styles.player_icon} src={'/../public/fighter-profile.jpeg'} alt="player 1 icon" width={50} height={50}/>
      <Image className={styles.wolf1_icon} src={'/../public/wolf-icon.jpeg'} alt="wolf 1 icon" width={50} height={50}/>
      <Image className={styles.wolf2_icon} src={'/../public/wolf-icon.jpeg'} alt="wolf 2 icon" width={50} height={50}/>
      {/* use a basic image for now, possible step two is introducing obstacles, step three is look at
      dungeon alchemist to see if I can pull in its dungeon creation algorithm. */}
      <div className={styles.dice_box}>
      {/* <Image className={styles.d20_icon} src={'/../public/d20.jpeg'} alt="d20 icon" width={50} height={50}/>
      <Image className={styles.d6_icon} src={'/../public/d6.jpeg'} alt="d20 icon" width={50} height={50}/> */}
      </div>
      <StoryBox/>
      <Link href='/' className={styles.end_game}>X</Link>
    </div>
  )
}