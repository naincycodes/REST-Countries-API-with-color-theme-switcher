import React, { useEffect, useState } from 'react'
import './App.css'
import CountryCard from './CountryCard'
import nightMode from './images/night-mode.png'
import nightModeFill from './images/night-mode-fill.png'
import searchIcon from './images/search-bar.png'
import { countriesData } from './countriesData'

function App() {
  return (
    <>
      <nav>
        <h1>Where in the world?</h1>
        <div className='dark-mode'>
          <img src={nightMode} alt='dark mode icon' />
          <p>Dark Mode</p>
        </div>
      </nav>
      <div className='search-bar'>
        <img src={searchIcon} alt='search bar icon' />
        <input type='search' size='40' placeholder='Search for a country...' />
      </div>
      <div className="country-card-parent">
        {countriesData.map((country, i) => (
          <CountryCard country={country} />
        ))}
      </div>
    </>
  )
}

export default App
