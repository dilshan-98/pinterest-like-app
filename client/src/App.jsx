import { useState } from 'react'
import './App.css'
import TopBar from './components/topBar/topBar'
import LeftBar from './components/leftBar/leftBar'
import Gallery from './components/gallery/gallery'

function App() {
  return (
    <>
      <div className='app'>
        <LeftBar/>
        <div className='content'>
          <TopBar/>
          <Gallery/>
        </div>
      </div>
    </>
  )
}

export default App
