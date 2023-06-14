import styles from '../styles/playerStats.module.css';
import Image from 'next/image';

export default function PlayerStats (){
  //these are terribly hardcoded in, ideally these should be pulled from a player stats
  //in the player table.
  return (
    <div className={styles.player_stats}>
        <details>
          <summary className={styles.player_name}>Regina George</summary>
          <Image src={'/../public/fighter-profile.jpeg'} alt="player 1 profile image" width={200} height={200}/>
          <div className={styles.player_stat}>{`strength: 16  (+3)`}</div>
          <div className={styles.player_stat}>{`constitution: 15 (+2)`}</div>
          <div className={styles.player_stat}>{`dexterity: 14 (+2)`}</div>
          <div className={styles.player_stat}>{`intelligence: 11 (+0)`}</div>
          <div className={styles.player_stat}>{`wisdom: 13 (+1)`}</div>
          <div className={styles.player_stat}>{`charisma: 9 (-1)`}</div>
        </details>
    </div>
  )
}