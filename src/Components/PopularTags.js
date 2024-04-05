import React from 'react';
import Card from 'react-bootstrap/Card';

const tagsData = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/150',
    hashtag: '#EnglishPremierLeague',
    description: '82,000 posts',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/150',
    hashtag: '#Football',
    description: '102,500 posts',
  },
  // Add more data objects as needed
];

const PopularTags = () => (
  <div>
    <h2 style={{ textAlign: 'center', width: '100%' }}>Popular Tags</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {tagsData.map(tag => (
        <Card key={tag.id} style={{ width: '48%', marginBottom: '10px' }}>
          <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={tag.imageUrl} alt="Placeholder" style={{ width: 'auto', height: '90%', borderRadius: '10px' }} />
            </div>
            <div style={{ flex: '3', padding: '0.5em' }}>
              <Card.Body>
                <Card.Title>{tag.hashtag}</Card.Title>
                <Card.Text>{tag.description}</Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export default PopularTags;
