import React, { Component } from 'react'
import { recipeCardStyle, recipeCardImageStyle } from './styles'
import placeholderImage from './react-logo.png'

class RecipeCard extends Component {
  render() {
    return (
      <div>
        <input
          style={{ width: 300 }}
          onKeyUp={(e) => {
            let results = this.props.recipesData.recipes.filter(function(entry) {
              return entry.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
            })

            this.setState({ filteredResults: results })
          }}
        />
      </div>
    )
  }
}

export default RecipeCard
