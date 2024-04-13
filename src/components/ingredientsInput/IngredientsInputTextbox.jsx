import React, { useState } from 'react'
import ingredientStyling from './ingredientStyling.module.css'

export const IngredientsInputTextbox = ({setIngredArray}) => {

    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIngredArray((oldState) => [...oldState, {text, id: crypto.randomUUID()}]);
        setText("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className={ingredientStyling.ingredientForm}>
        
        <input className={ingredientStyling.ingredientInput} type="text" placeholder="Enter ingredients" value={text} onChange={handleChange}/>
        <button className={ingredientStyling.ingredientButton}>Add</button>

        </form>
    </div>
  )
}
