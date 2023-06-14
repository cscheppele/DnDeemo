'use client'

import Image from 'next/image'
import styles from '../styles/page.module.css'
import GameSetup from '@/components/game-setup'
import { useState } from 'react'

export default function Home() {
  const [setupDisplay, setSetupDisplay] = useState(false);

  //any's are sprinkled throughout either explicitly or implicitly.  most of these were because the type is obscure and our focus was function
//to start and clean code came second, so keep an eye out. especially in any function dealing with a db or
//api call.
  
  //this will show the gamesetup component, 
  function changeDisplay() {
    setSetupDisplay(!setupDisplay)
  }
//The descriptions is pretty long, so it might make more sense to just put it in its own 
//component for ease of readability.

  //once I have full functionality for a single player, the gameroom model will need to be developed
  //because at the bottom of this page I would like to have two buttons, one for creating a new gameroom
  //and one for joining an existing game.  
  //I may also need a separate button for dming, but I am not sure if I want to send them to a different
  //game setup or if I just want to create a DM class players can choose and limit gameRooms to one
  //DM per room
  return (
    <main className={styles.main}>
      <div className={styles.title_logo}>
        <h1 className={styles.title}>DnDeemo</h1>
        <h2 className={styles.motto}>The DnD Demo</h2>
      </div>
      <div className={styles.description_section}>
        <div className={styles.description_background}></div>
        <p className={styles.description}>
          Dungeons and Dragons is both one of the simplest and most complex games in existence.
          At its heart, it's nothing more than making up a story with your friends, something 
          we have all been able to do from the time we could walk. It is that beautiful simplicity,
          though, that also makes it so complex.  If I say "I cast a spell to make it rain" how does
          my friend know I mean a torrential downpour and not a light drizzle?  If I shoot a phaser
          gun at an enemy and say I hit them, but my friend say I missed, how do we determine who is right
          in this imaginary world of ours?  How do you make something as vastly changeable as 
          human imagination consistent?  Well, you can't really, but people have certainly tried, and
          as of today the guidelines set forth by Wizards of the Coast have proven to be the most popular.
          <br/>
          <br/>
          Have you ever tried to read their books though? it's a lot, and for many new players, it's 
          just too much.  Creating your first character can take literal hours, and that is before you 
          even start to play.  Then you have to make skill checks.  What is initiative? How do you figure 
          out armor class?  Why can only some people use certain skills? Does everyone else here hate me 
          for not knowing all of this already? Should I stop asking questions?
          <br/>
          <br/>
          DnDeemo aims to bring the stressfree simplicity of imagination back to DnD, guiding beginners 
          through their first DnD experience, explaining what rolls you need to make, as well as why, 
          and if you are not sure what something is or how to find it, you can simply ask.  The Dm is an
          ai interface, so you can ask away without feeling guilty or silly about your questions.    But 
          this has been a lot of talk, and while a good narrative means a lot, I think its time we play.
          Hit the button below to begin your journey!
        </p>
      </div>
      <button  
      className={styles.adventure_start} 
      onClick={() => changeDisplay()}>
        Begin your adventure!
      </button>
      <GameSetup show={setupDisplay} setShow={setSetupDisplay}/>
    </main>
  )
}
