import React, { Component } from 'react'
import recipesData from './recipes'
import Header from './Header'
import SearchBar from './SearchBar'
import { recipesContainer } from './styles'
// 1.1 Import the RecipeCard component here

class App extends Component {
  constructor() {
    super()

    this.state = { filteredResults: [] }
  }

  render() {
    const { filteredResults } = this.state
    let recipesToShow = filteredResults.length > 0 ? filteredResults : recipesData.recipes

    return (
      <div style={{ textAlign: 'center' }}>
        <Header style={{ marginBottom: 20 }} />

        <SearchBar recipesData={recipesData} />

        <h1>Here is where you start your task - Edit src/App.js and save to reload.</h1>

        {/* 4.1 The recipes are a bit of a mess → add the container style */}
        <div id="recipe-container">
          {/* Loop through all the recipes */}
          {recipesToShow.map((recipe, index) => (
            // Use the "recipe" variable from the previous line to pass the recipe data
            <div key={index}>{/* 1.2 Use the RecipeCard component here */}</div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
