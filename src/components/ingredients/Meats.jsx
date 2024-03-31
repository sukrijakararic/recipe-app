import React, { useState } from 'react'
import styles from './styles.module.css'

export const Meats = ( {setProtein}) => {


    const handleClick = (e) => {
        setProtein(e.target.id)
    }

  return (
    <>
    <form>
        <h3>Pick a protein</h3>

        <div className={styles.protein}>
        <input onClick={handleClick} type="radio" id='chicken,' name='protein' />
        <label htmlFor="chicken,">Chicken</label>
        </div>

        <div className={styles.protein}>
        <input onClick={handleClick} type="radio" id='beef,' name='protein' />
        <label htmlFor="beef,">Beef</label>
        </div>
      
        <div className={styles.protein}>
        <input onClick={handleClick} type="radio" id='fish,' name='protein'/>
        <label htmlFor="fish,">Fish</label>
        </div>
        
        <div className={styles.protein}>
        <input onClick={handleClick} type="radio" name="protein" id="vegetarian," />
        <label htmlFor="vegetarian,">vegetarian</label>
        </div>

    </form>
    </>
  )
}
