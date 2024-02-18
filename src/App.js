// App.js
import React from 'react';
import './App.css';

import Players from './Players';

function App() {
  // Mock player data for demonstration
  const players = [
    {
      name: 'messi',
      team: 'barcelona',
      jerseyNumber: 10,
      nationality: 'egypt',
      age: 25
    },
    {
      name: 'ronaldo',
      team: 'real madrid',
      jerseyNumber: 7,
      nationality: 'portugal',
      age: 28
    },
    {
      name: 'ronaldo',
      team: 'real madrid',
      jerseyNumber: 7,
      nationality: 'portugal',
      age: 28
    },
    {
      name: 'ronaldo',
      team: 'real madrid',
      jerseyNumber: 7,
      nationality: 'portugal',
      age: 28
    },
    
  ];

  return (
    <div className="App">
      <Players players={players} />
    </div>
  );
}

export default App;
