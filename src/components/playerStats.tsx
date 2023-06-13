import styles from '../styles/playerStats.module.css';
import Image from 'next/image';

export default function PlayerStats (){
  return (
    <div className={styles.player_stats}>
        <details>
          <summary className={styles.player_name}>Regina George</summary>
          <Image src={'/../public/fighter-profile.jpeg'} alt="player 1 profile image" width={200} height={200}/>
          <div className={styles.player_stat}>str: 16</div>
          <div className={styles.player_stat}>con: 15</div>
          <div className={styles.player_stat}>dex: 14</div>
          <div className={styles.player_stat}>int: 11</div>
          <div className={styles.player_stat}>wis: 13</div>
          <div className={styles.player_stat}>cha: 9</div>
        </details>
    </div>
  )
}