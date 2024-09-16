import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componenet/Navbar'
import MainRoute from './Routes/MainRoute'
import Footer from './Componenet/Footer'


function App() {

  return (
    <>
   <Navbar/>
    <MainRoute/>
    <Footer/>
    </>
  )
}

export default App
