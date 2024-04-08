import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Typography } from '@mui/material';

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
    <Typography variant="h4" align="center" style={{ marginBottom: '20px', fontSize: '18px' }}>Popular Tags</Typography>
   {/* <Row xs={1} md={2} lg={2} xl={2} className="g-4">
      {tagsData.map(tag => (
        <Col key={tag.id}>
          <Card>
            <Row className="g-0">
              <Col xs={4} md={4} lg={4} xl={4}>
                <Card.Img src={tag.imageUrl} alt="Placeholder" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
              </Col>
              <Col xs={8} md={8} lg={8} xl={8}>
                <Card.Body>
                  <Card.Title>{tag.hashtag}</Card.Title>
                  <Card.Text>{tag.description}</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row> */}
  </div>
);

export default PopularTags;
