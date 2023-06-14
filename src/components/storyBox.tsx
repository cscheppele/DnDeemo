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
      //content type currently does nothing, but my goal with it is to send it with the message to the ai to help
      //generate a better response.  if a player asks if they CAN do something, that does not necessarily mean they
      //want to or will do that thing, but the ai can easily misinterpret that and continue the story on accident.
      //additionally, if a player is stuck and wants a suggestion, I want them to ask the ai for a suggestion without
      //the ai just playing the turn for the user. (this is a big problem I have found, keeping the ai from simply 
      //playing turns for the user and returning a story that says "its now your turn, you did XYZ".)
      //we also don't need user inputs of type suggest or clarify to be saved to the story db as they don't actually
      //add anything to the story itself and we need to be trying to limit tokens where possible.
    })
    const res =  
    await fetch('/api/story', {
      method: 'POST',
      body,
    })
    const response = await res.json();
    return response;
  }

  //I don't really like this, I am sending an empty prisma messages array on init here.
  //it gives me the response I need, but its messy.  I'd like to have a permanent message[0], but I
  //am also wanting to clear out all messages in a gameroom history when all players have exited the room
  //and I don't want to lose that.  I could look into posting to the db first before the fetch
  //in use effect though, would just have to figure out what to add.  

  useEffect(()=> {
  fetch('/api/openAI')
        .then(res => {
          console.log("res: ",res)
          return res.json()
        })
        .then(res1 => {
          console.log("res1: ",res1)
          return res1;
        })
        .then(res2 => setGameHistory((prevHistory: any) => [...prevHistory, res2.content]))
},[])

  function handleSubmit (e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (storyFormData.content === "" || storyFormData.type === "") return alert("Please fill out all fields")
    addToStory(storyFormData).then((response: any) => {
      setGameHistory((prevHistory) => [...prevHistory, response.content])
      fetch('/api/openAI')
        .then(res => {
          console.log("res: ",res)
          return res.json()
        })
        .then(res1 => {
          console.log("res1: ",res1)
          return res1;
        })
        .then(res2 => setGameHistory((prevHistory: any) => [...prevHistory, res2.content]))
        //this long chain of thens is obnoxious but necessary to get to the actual ai response data.
        //at least as far as we were able to manage.
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

//thinking the form can probably just be pulled out into its own component.

//need to change to styling of the story box for visual stuff, especially the submit button.

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