import styles from '../styles/game-setup.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'path';
import { ChangeEvent, useState, useEffect } from 'react';
import { fetchClassList } from '@/api/Open5eApiservice';

export default function GameSetup({show, setShow}:{show:boolean,setShow:any}) {
  //state for form Data
  const [formData, setFormData] = useState({
    name: '',
    class: 'Fighter',
  })
  //state for class description
  const [classDescription, setClassDescription] = useState('')

  //state for class list
  const [classList, setClassList] = useState([])
  
  //get list of class data, we are not going to manipulate it, so no need for state. I think.
  useEffect(() => {
    fetchClassList().then(response => {
      setClassList(response.results)
      //be sure to define the CharClass
      setClassDescription(response.results.find(el => el.name === formData.class).desc)
    });
  },[])

  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    console.log('target name and value: ', e.target.name, e.target.value);
    switch(e.target.name){
      case 'class':
        setFormData({
          name: formData.name,
          class: e.target.value,
        });
        //the warning for below is is for potentially being undefined, not sure how to fix it, but
        //the code currently still works regardless.
        setClassDescription(classList.find(el => el.name === e.target.value).desc)
        break;
      case 'name': 
        setFormData({
          name: e.target.value,
          class: formData.class,
        });
        break;
      default: break;
      }
    
  }

  //cancel game/character creation and return to home page
  function clickDelete(){
    //need to prevent the full page rerender.  probably has to do with use client v server.
    // e.preventDefault
    setShow()
  }
  function handleSubmit (e: ChangeEvent<HTMLFormElement>){
    e.preventDefault()
    const hold = e.target.name;
    // const player = await prisma.player.create()
    // createRoom(player)
    setFormData({
      name: '',
      class: 'Fighter',
    })
  }
//can I put the classes and classList and description into their own component?
  return (
    <div className={`${styles.game_setup} ${show ? styles.show : ''}`}>
      <div className={`${styles.container} ${show ? styles.show : ''}`}/>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button className={styles.delete} onClick={clickDelete}>X</button>
        <h1 className={styles.title}>DnDeemo</h1>
        {/* <label>Name</label> */}
        <input  className={styles.player_name} type='text' name='name' onChange={handleChange} value={formData.name} placeholder='Choose a name!'/>
        <div className={styles.class_options}>
        <label>
          <input
            type="radio"
            name="class"
            value="Fighter"
            checked={formData.class === 'Fighter'}
            onChange={handleChange}
            className={styles.class_button}
          />
          Fighter
        </label>

        <label>
          <input
            type="radio"
            name="class"
            value="Cleric"
            checked={formData.class === 'Cleric'}
            onChange={handleChange}
            className={styles.class_button}
          />
          Cleric
        </label>

        <label>
          <input
            type="radio"
            name="class"
            value="Wizard"
            checked={formData.class === 'Wizard'}
            onChange={handleChange}
            className={styles.class_button}
          />
          Wizard
        </label>
        <label>
          <input
            type="radio"
            name="class"
            value="Rogue"
            checked={formData.class === 'Rogue'}
            onChange={handleChange}
            className={styles.class_button}
          />
          Rogue
        </label>

        <label>
          <input
            type="radio"
            name="class"
            value="Ranger"
            checked={formData.class === 'Ranger'}
            onChange={handleChange}
            className={styles.class_button}
          />
          Ranger
        </label>
      </div>
        <p className={styles.class_description}>{classDescription}</p>
        <Image src={`/../public/class-icons/${formData.class}Icon.png`} width={100} height={100} alt={`${formData.class} icon`}/>
        <Link href='/gameRoom'><input className={styles.journey_start} type='submit' value='Journey Start'/></Link>
      </form>
    </div>
  )
}