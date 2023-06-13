'use client';

import styles from '../styles/storyBox.module.css';
// import StoryForm from './storyForm';
import { ChangeEvent,useState, useEffect } from 'react';

export default function StoryBox () {
  const [storyFormData, setStoryFormData] = useState({
    type: '',
    content: '',
  });
  const [gameHistory, setGameHistory] = useState(["On your way to the Baromin City you have been attacked by a pair of wolves."]);

  async function addToStory (story: any) {
    const body = JSON.stringify({
      content: story.content,
      contentType: story.type,
      //createdOn: Date.now()
    })
    const res =  
    await fetch('/api/story', {
      method: 'POST',
      body,
    }).then(res => res.json());
    return res;
  }

  function handleSubmit (e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (storyFormData.content === "" || storyFormData.type === "") return alert("Please fill out all fields")
    addToStory(storyFormData).then((response: any) => {
      setGameHistory((prevHistory) => [...prevHistory, response.content])
      console.log("gameHistory: ", gameHistory)
    })
    setStoryFormData({
      type: '',
      content: '',
    })
  }

  
     
 
  function updateType (e: ChangeEvent<HTMLSelectElement>) {
    setStoryFormData( {
      type: e.target.value,
      content: storyFormData.content
    })
  }

  function updateContent (e: ChangeEvent<HTMLInputElement>) {
    setStoryFormData( {
      type: storyFormData.type,
      content: e.target.value
    })
  }

  return (
    <div className={styles.story_box}>
      <div className={styles.history}>{gameHistory.map(el=> <div> {el} </div>)}</div>
      <form className={styles.story_form} onSubmit={handleSubmit}>
      <select name='action-type' 
        className={styles.action_types} 
        value={storyFormData.type} 
        onChange={updateType}>
        <option value="">--Pick an action type--</option>
        <option value="declare">Declare Action</option>
        <option value="clarify">Clarify</option>
        <option value="suggest" >Get Suggestion</option>
      </select>
      <input className={styles.player_input} 
        type='text' value={storyFormData.content} 
        placeholder="What's your next move?"
        onChange={updateContent}/>
      <input className={styles.submit} type="submit" value="▶️"/>
      </form>
    </div>
  )
}