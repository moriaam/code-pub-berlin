import React from 'react'
import { recipeCardStyle, recipeCardImageStyle } from './styles'
import placeholderImage from './react-logo.png'

const RecipeCard = (props) => (
  // <div>
  <div style={recipeCardStyle}>
    {/* My recipe */}
    {/* 2.1 Add the title of the actual recipe */}
    {/* 2.2 Use the recipe's image */}
    {/* 2.1 Add the title of the actual recipe */}
    {/* 2.2 Use the recipe's image */}
    {/* <img alt="recipe" src={placeholderImage} /> */}

    {/* solved */}
    <div>{props.recipe.title}</div>
    <img alt="recipe" src={props.recipe.image} style={recipeCardImageStyle} />
  </div>
)

export default RecipeCard
