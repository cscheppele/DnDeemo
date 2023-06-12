'use client';

import styles from '../styles/storyBox.module.css';
import StoryForm from './storyForm';
import { useState } from 'react';

export default function StoryBox () {
  const [gameHistory, setGameHistory] = useState([])
  

    // function handleSubmit (e: ChangeEvent<HTMLFormElement>) {
    //   e.preventDefault
    //   if (storyFormData.content === "" || storyFormData.type === "") return alert("Please fill out all fields")
    //   //addToStory(storyFormData).then(response => {
    //   //setgameHistory([...gameHistory, response.json()])
    //   //})
    //   //setStoryFormData({
    //   //   type: '',
    //   //   content: '',
    //   // })
    // }
       
   
    // function updateType (e: ChangeEvent<HTMLSelectElement>) {
    //   setStoryFormData( {
    //     type: e.target.value,
    //     content: storyFormData.content
    //   })
    // }

    // function updateContent (e: ChangeEvent<HTMLInputElement>) {
    //   setStoryFormData( {
    //     type: storyFormData.type,
    //     content: e.target.value
    //   })
    // }
   

  return (
    <div className={styles.story_box}>
      <div className={styles.history}>{gameHistory}</div>
      <StoryForm/>
    </div>
  )
}