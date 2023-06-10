import styles from '../../styles/gameRoom.module.css'
// import Image from 'next/image'
import PlayerStats from '@/components/playerStats'
import StoryBox from '@/components/storyBox'
import Link from 'next/link'

export default function GameRoom(){
  return (
    <div className={styles.game_room}>
      <PlayerStats/>
      <div className={styles.dungeon_map}/>
      {/* use a basic image for now, possible step two is introducing obstacles, step three is look at
      dungeon alchemist to see if I can pull in its dungeon creation algorithm. */}
      <div className={styles.dice_box}>Dice Box</div>
      <StoryBox/>
      <Link href='/' className={styles.end_game}>X</Link>
    </div>
  )
}