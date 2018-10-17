import React, { Component } from 'react'
import logo from './code-pub-digital.png'
import './App.css'
import recipesData from './recipes'
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

        {/* 4.1 The recipes are a bit of a mess → add the container style */}
        <div>
          {recipesToShow.map((recipe, index) => (
            <div key={index}>{/* 1.2 Use the RecipeCard component here */}</div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
