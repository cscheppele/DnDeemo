'use client'

import Image from 'next/image'
import styles from '../styles/page.module.css'
import GameSetup from '@/components/game-setup'
import { useState } from 'react'

export default function Home() {
  const [setupDisplay, setSetupDisplay] = useState(false);
  
  function changeDisplay() {
    setSetupDisplay(!setupDisplay)
  }

  return (
    <main className={styles.main}>
      <div className={styles.title_logo}>
        <h1 className={styles.title}>DnDeemo</h1>
        <h2 className={styles.motto}>The DnD Demo</h2>
      </div>
      <div className={styles.description_section}>
        <div className={styles.description_background}></div>
        <p className={styles.description}>
          !!some paragraph about why it came about!!
          <br/>
          <br/>
          !!another paragraph about how we solve it!!
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
