import React from 'react'
import { useState } from 'react'
import RecipeCard from './components/RecipeCard'
import Search from './components/Search'
import HomePage from './HomePage'

function App() {
  const[startCooking,setStartCooking] = useState(false)
  const[searchQuery,setSearchQuery] = useState("")
  

  const handleStartCooking = () => {
    setStartCooking(true);
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query)
  }
  return (
    <>
    {!startCooking && <HomePage onStartCooking={handleStartCooking} />}
    {startCooking && <Search searchQuery={searchQuery} onSearchQueryChange={handleSearchQueryChange}/>}
    {startCooking && <RecipeCard searchQuery={searchQuery}/>}
    </>
  )}

  export default App
