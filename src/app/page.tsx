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
      <h1 className={styles.title}>DnDeemo</h1>
      <h2 className={styles.motto}>The DnD Demo</h2>
      <p className={styles.description}>
        !!some paragraph about why it came about!!
        <br/>
        <br/>
        !!another paragraph about how we solve it!!
      </p>
      <button  
      className={styles.adventure_start} 
      onClick={() => changeDisplay()}>
        Begin your adventure!
      </button>
      <GameSetup show={setupDisplay} setShow={setSetupDisplay}/>
    </main>
  )
}
