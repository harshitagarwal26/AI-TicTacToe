import React from 'react'
import GameGrid from './GameGrid';

const App = () => {
  return (
    <div style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
  }}>
      <GameGrid />
    </div>
  )
}

export default App
