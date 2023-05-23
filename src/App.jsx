import React from 'react'
import { useState } from 'react'
import RecipeCard from './components/RecipeCard'
import RecipeIngredients from './components/RecipeIngredients'
import RecipeSteps from './components/RecipeSteps'
import Search from './components/Search'
import HomePage from './HomePage'

function App() {
  const [startCooking, setStartCooking] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [displayIngredients, setDisplayIngredients] = useState(true)
  const [displayInstructions, setDisplayInstructions] = useState(false)
  const [vegetarianFilter, setVegetarianFilter] = useState(false);
 
  const handleFilter = () => {
    if (vegetarianFilter) {
      return 'vegetarian';
    } else {
      return 'vegan';
    }
  };

  
  const toggleVegetarian = () => {
    setVegetarianFilter(!vegetarianFilter)
  }

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
  const handleToggleIngredients = () => {
    setDisplayIngredients(true)
    setDisplayInstructions(false)
  }
  const handleToggleInstructions = () => {
    setDisplayIngredients(false)
    setDisplayInstructions(true)
  }



  return (
    <>
      {!startCooking && <HomePage onStartCooking={handleStartCooking} />}
      {startCooking && !selectedRecipe && (
        <Search searchQuery={searchQuery} onSearchQueryChange={handleSearchQueryChange} />
      )}
      {startCooking && selectedRecipe && (
        <>
          {displayIngredients && !displayInstructions && (
            <RecipeIngredients
              selectedRecipe={selectedRecipe}
              onGoBack={handleGoBack}
              onToggleIngredients={handleToggleIngredients}
              onToggleInstructions={handleToggleInstructions}
              isIngredientsSelected={true}
              isInstructionsSelected={false}
            />
          )}
          {displayInstructions && !displayIngredients && (
          <RecipeSteps
            selectedRecipe={selectedRecipe}
            onGoBack={handleGoBack}
            onToggleIngredients={handleToggleIngredients}
            onToggleInstructions={handleToggleInstructions}
            isIngredientsSelected={false}
            isInstructionsSelected={true}
          />
            )}
        </>
      )}
      {startCooking && !selectedRecipe && (
        <RecipeCard 
        searchQuery={searchQuery} 
        vegetarian={toggleVegetarian}
        vegetarianFilter={vegetarianFilter}
        handleFilter={handleFilter} 
        setSelectedRecipe={handleRecipeCardClick}
         />
      )}
    </>
  );
}

export default App;


