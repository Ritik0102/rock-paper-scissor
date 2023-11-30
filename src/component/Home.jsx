import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='app'>
      <div className='container'>
        <h1> Rock-Paper-Scissor</h1>
      </div>
      <div className='game'>
        <Link className='btn btn-primary' to='/game'>
           Get Started!!
        </Link>
        
      </div>
    </div>
    </div>
  )
}

export default Home
