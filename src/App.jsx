import React from 'react'
import { useState } from 'react'
import Search from './components/Search'
import HomePage from './HomePage'

function App() {
  const[startCooking,setStartCooking] = useState(false)

  
  const handleStartCooking = () => {
    setStartCooking(true);
  };

  return (
    <>
    {!startCooking && <HomePage onStartCooking={handleStartCooking} />}
    {startCooking && <Search />}
    </>
  )}

  export default App
