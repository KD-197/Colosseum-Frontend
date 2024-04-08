import React from 'react';
import Card from 'react-bootstrap/Card';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

const data = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/150',
    heading: 'Card Heading 1',
    description: 'Description for card 1',
    badges: ['Badge 1', 'Badge 2', 'Badge 3'],
    avatarUrl: 'https://via.placeholder.com/50',
    name: 'John Doe',
    filterWords: ['Tag1', 'Tag2', 'Tag3']
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/150',
    heading: 'Card Heading 2',
    description: 'Description for card 2',
    badges: ['Badge 4', 'Badge 5', 'Badge 6'],
    avatarUrl: 'https://via.placeholder.com/50',
    name: 'Jane Doe',
    filterWords: ['Tag4', 'Tag5', 'Tag6']
  },
];

const CustomCard = ({ imageUrl, heading, description, badges, avatarUrl, name, filterWords }) => (
  <Card style={{ width: '100%', height: '25%', marginBottom: '10px' }}>
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', flex: '1', padding: '0.5em', alignItems: 'center', justifyContent: 'center' }} >
        <img src={imageUrl} alt="Placeholder" style={{ width: '150px', height: '150px', borderRadius: '50%', alignItems: 'center', justifyContent: 'center' }} />
      </div>
      <div style={{ flex: '3', padding: '0.5em' }}>
        <Card.Body>
          <div style={{ marginBottom: '10px' }}>
            {filterWords.map((word, index) => (
              <Chip key={index} label={word} style={{ marginRight: '5px' }} />
            ))}
          </div>
          <Card.Title>{heading}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div style={{ marginBottom: '10px' }}>
            {badges.map((badge, index) => (
              <Chip key={index} label={badge} color="primary" clickable style={{ marginRight: '5px' }} />
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar alt="Avatar" src={avatarUrl} style={{ marginRight: '10px' }} />
            <span>{name}</span>
          </div>
        </Card.Body>
      </div>
    </div>
  </Card>
);

const CardList = () => (
  <div style={{ maxHeight: '400px', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#888888 #f0f0f0'  }}>
    {data.map((item) => (
      <CustomCard
        key={item.id}
        imageUrl={item.imageUrl}
        heading={item.heading}
        description={item.description}
        badges={item.badges}
        avatarUrl={item.avatarUrl}
        name={item.name}
        filterWords={item.filterWords}
      />
    ))}
  </div>
);

export default CardList;
