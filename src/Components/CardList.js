import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

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
  <Card style={{ width: '100%', height: '25%' }}>
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ flex: '1', padding: '0.5em' }}>
        <img src={imageUrl} alt="Placeholder" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
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
          <div>
            {badges.map((badge, index) => (
              <Badge key={index} badgeContent={badge} color="primary">
                <span style={{ marginRight: '5px' }}>Badge</span>
              </Badge>
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
  <div>
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
