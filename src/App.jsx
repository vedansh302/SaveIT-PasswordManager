import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"

function App() {
  

  return (
    <>
      <Navbar/>
      <Manager/>
      <Footer/>
      <Analytics/>
    </>
  )
}

export default App
