import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Players from './Players';

const Player = ({ name, team, jerseyNumber, nationality, age }) => {
  // Mocking the player data for demonstration
  const player = {
    name,
    team,
    jerseyNumber,
    nationality,
    age,
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Player Details</Card.Title>
          {/* Rendering the Player component to display player information */}
          <Players players={[player]} />
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;
