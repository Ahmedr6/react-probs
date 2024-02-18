import React from 'react';

const Players = ({ players }) => {
  


  
  return (
    <div>
      <h2>Player Details:</h2>
      {players.map(player => (
        <div key={player.name}>
          <p>Name: {player.name}</p>
          <p>Team: {player.team}</p>
          <p>Jersey Number: {player.jerseyNumber}</p>
          <p>Nationality: {player.nationality}</p>
          <p>Age: {player.age}</p>
        </div>
      ))}
    </div>
  );
};

export default Players;
