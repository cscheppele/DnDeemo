import styles from '../styles/playerStats.module.css';
import Image from 'next/image';

export default function PlayerStats (){
  //these are terribly hardcoded in, the current plan was to have them hardcoded according to 
  //class chosen, and for each player I would access them by player.class.str etc.  
  //we would need to make a fetch call to the player db for the specific character created in game 
  //setup.  

  //Initial thought was to have the gameroom with an array of player ids, and you would create a 
  //a different details section for each playerId, displaying the appropriate information.  that
  //should probably be pulled out into a child component though

  //function to get calculate modifier

  //the styling of this page needs work.  the stat backgrounds are not fitting like I had hoped, 
  //additionally, I want the stats and picture of the selected player to fill the section without
  //overflowing. and I am thinking of keeping names to one side of the section and the stats show up 
  //in a column on the other side of the section when a player is selected.  only one player's stats 
  //should display at a time.
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