import React from 'react'
import { useEffect } from 'react';

const apiKey = '2c286c913818405685a052e9d10d313a'

export const GetRandomRecipe = () => {

    useEffect(() => {
        getPopular();
    },[]);

    const getPopular = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?${apiKey}&number=10&exclude-tags=pork,bacon`);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
    };

  return (
    <div>
    </div>
  )
}
