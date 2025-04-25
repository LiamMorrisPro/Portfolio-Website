import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Background from './components/Background.jsx'
import Illustrations from './components/Illustrations.jsx'
import DesktopGrid from './components/DesktopGrid.jsx'


function App() {

  return (
    <>

      <Header></Header>
      <DesktopGrid/>
    </>

  );
}

export default App
