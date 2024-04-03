import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Rating from '@mui/material/Rating';

const Matches = () => {
    const [value, setValue] = useState(0);

    return (
      <Card style={{ maxWidth: '400px' }}>
        <Card.Body >
          <div style={{ display: 'flex', alignItems: 'center', height: '30%', margin: '1%' }}>
            <div style={{ flex: '1' }}>
              <Rating
                name="simple-controlled"
                value={value}
                max={1} 
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div style={{ flex: '6', height: 'auto' }}>
              <Card.Title>Match 1</Card.Title>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', height: '30%', margin: '1%'}}>
            <div style={{ flex: '1' }}>
              <Rating
                name="simple-controlled"
                value={value}
                max={1} 
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div style={{ flex: '6', height: 'auto' }}>
              <Card.Title>Match 2</Card.Title>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', height: '30%', margin: '1%'}}>
            <div style={{ flex: '1' }}>
              <Rating
                name="simple-controlled"
                value={value}
                max={1} 
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div style={{ flex: '6', height: 'auto' }}>
              <Card.Title>Match 3</Card.Title>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  };

export default Matches;
