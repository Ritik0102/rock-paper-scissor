import React from 'react'
import Home from './component/Home'
import Game from './component/Game';
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/game' element={<Game/>}></Route>
    </Routes>

      
    </>
  )
}

export default App
