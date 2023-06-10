import styles from '../styles/storyBox.module.css';

export default function StoryBox () {
  return (
    <div className={styles.story_box}>
      <div className={styles.history}></div>
      <input className={styles.player_input} type='text' placeholder="What's your next move?"/>
    </div>
  )
}