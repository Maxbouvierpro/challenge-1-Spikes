import React from 'react'
import spikesLogo from './assets/Spikes-Logo.svg'
import patternHaut from './assets/Pattern-up.png'
import patternBas from './assets/Pattern-down.png'
import CardList from './CardList'
import BoutonSpikes from './linkSpikes'

import './App.css'

function App() {
  return (
    <div className="body">
      <img src={patternHaut} className="pattern-bg haut" alt=""/>
      <div className="wrapper wrapper-haut">
        <img src={spikesLogo} alt="Spikes logo" className="logo" />
      </div>

      <div className="wrapper wrapper-marquee">
      <CardList direction='right'/>      
      <CardList direction='left'/>      

      </div>

      <div className="wrapper wrapper-bottom">
        <BoutonSpikes />
      </div>
      <img src={patternBas} className="pattern-bg bas" alt=""/>
    </div>
  )
}

export default App
