import React from 'react'

import NavBar from '../components/navbar.jsx'
import Hero from '../components/hero.jsx'
import Card from '../components/card.jsx'
import experienceInfo from '../experienceInfo.js'

function App() {
  const cards = experienceInfo.map(data => {
    return (
      <Card
      key={data.id}
      item={data}
      />
    )
  
  })
  return (
    <div>
        <NavBar />
        <Hero />
        <div className="cards-section">
          {cards}
        </div>
    </div>
  )
}

export default App
