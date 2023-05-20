import React from 'react'
import { useState } from 'react'
import RecipeCard from './components/RecipeCard'
import RecipeDetails from './components/RecipeDetails'
import Search from './components/Search'
import HomePage from './HomePage'

function App() {
  const [startCooking, setStartCooking] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRecipe, setSelectedRecipe] = useState(null)


  const handleStartCooking = () => {
    setStartCooking(true);
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query)
    setSelectedRecipe(null)
  }

  const handleRecipeCardClick = (recipe) => {
    setSelectedRecipe(recipe);

  };

  const handleGoBack = () => {
    setSelectedRecipe(null)
  }

  return (
    <>
      {!startCooking && <HomePage onStartCooking={handleStartCooking} />}
      {startCooking && !selectedRecipe && (
        <Search searchQuery={searchQuery} onSearchQueryChange={handleSearchQueryChange} />
      )}
      {startCooking && selectedRecipe && <RecipeDetails selectedRecipe={selectedRecipe} onGoBack={handleGoBack} />}
      {startCooking && !selectedRecipe && (
        <RecipeCard searchQuery={searchQuery} setSelectedRecipe={handleRecipeCardClick} />
      )}
    </>
  );
}

export default App
