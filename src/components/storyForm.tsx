'use client'

import styles from '../styles/storyBox.module.css'
import { ChangeEvent, useState, useEffect } from 'react';
import storyMaker from '@/api/openAiApiService';

export default function StoryForm(){
  const [storyFormData, setStoryFormData] = useState({
    type: '',
    content: '',
  });
  const [gameHistory, setGameHistory] = useState<any[]>([]);

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
      setGameHistory((prevHistory) => [...prevHistory, response])
    })
    //setStoryFormData({
    //   type: '',
    //   content: '',
    // })
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
      <input type="submit" value="▶️"/>
      </form>
  )
}