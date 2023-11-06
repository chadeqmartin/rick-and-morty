import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CharacterPage from './pages/CharactersPage';


function App() {

  return (
    <>
   <Outlet/>
    </>
  )
}

export default App
