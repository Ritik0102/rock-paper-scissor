import React from 'react'
import Home from './component/Home'
import Game from './component/Game';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <BrowserRouter basename='/rock-paper-scissor'>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/game' element={<Game/>}></Route>
    </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
