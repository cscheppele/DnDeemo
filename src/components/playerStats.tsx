import styles from '../styles/playerStats.module.css';

export default function PlayerStats (){
  return (
    <div className={styles.player_stats}>
        <details>
          <summary>player 1</summary>
          player 1 stats
        </details>
        <details>
          <summary>player 2</summary>
          player 2 stats
        </details>
        <details>
          <summary>player 3</summary>
          player 3 stats
        </details>
        <details>
          <summary>player 4</summary>
          player 4 stats
        </details>
        <details>
          <summary>player 5</summary>
          player 5 stats
        </details>
        <details>
          <summary>player 6</summary>
          player 6 stats
        </details>
    </div>
  )
}