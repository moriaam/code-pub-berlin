import React, { Component } from 'react'
import logo from './code-pub-digital.png'
import './App.css'
import recipesData from './recipes'
import { recipesContainer } from './styles'
import RecipeCard from './RecipeCard'
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <input
          style={{ width: 300 }}
          onKeyUp={(e) => {
            console.log(e.target.value)
            let results = recipesData.recipes.filter(function(entry) {
              return entry.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
            })

            this.setState({ filteredResults: results })
          }}
        />

        <h1>Here is where you start your task - Edit src/App.js and save to reload.</h1>

        {/* <div> */}
        <div style={recipesContainer}>
          {recipesToShow.map((recipe, index) => (
            <div key={index}>
              {/* 1.2 Use the RecipeCard component here */}
              {/* <RecipeCard /> */}

              {/* solved */}
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
