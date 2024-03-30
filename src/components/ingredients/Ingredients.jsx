import React, { useState } from 'react'
import styles from './styles.module.css'

export const Ingredients = () => {

    const [protein, setProtein] = useState('')

    const handleClick = (e) => {
        setProtein(e.target.id)
    }

  return (
    <>
    <h2>What do you feel like eating today?</h2>
    <form className={styles.ingredientList}>
        <h3>Pick a protein</h3>

        <div className={styles.protein}>
        <input onClick={handleClick} type="radio" id='chicken' name='protein' />
        <label htmlFor="chicken">Chicken</label>
        </div>
      
        <div className={styles.protein}>
        <input onClick={handleClick} type="radio" id='fish' name='protein'/>
        <label htmlFor="fish">Fish</label>
        </div>
        
        <div className={styles.protein}>
        <input onClick={handleClick} type="radio" id='tofu' name='protein'/>
        <label htmlFor="tofu">Tofu</label>
        </div>
        
        <div className={styles.protein}>
        <input onClick={handleClick} type="radio" name="protein" id="vegeterian" />
        <label htmlFor="vegetarian">vegetarian</label>
        </div>

    </form>
    </>
  )
}
