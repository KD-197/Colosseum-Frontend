import React, { useState, useEffect } from 'react';
import { Container, Card, Badge, Button, TextField } from '@mui/material';
import { Row, Col} from 'react-bootstrap'
import Autocomplete from '@mui/material/Autocomplete';
import Avatar from '@mui/material/Avatar';
import { RiHeartAddFill } from "react-icons/ri";
import { MdGroupAdd } from "react-icons/md";
// import axios from 'axios';

const availableForums = [
  { id: 1, name: 'Forum 1', creator: 'Creator 1', likes: 100, members: 50, imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Forum 2', creator: 'Creator 2', likes: 150, members: 70, imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Forum 3', creator: 'Creator 3', likes: 120, members: 60, imageUrl: 'https://via.placeholder.com/150' },
];

const GlobalForum = () => {
  const [searchValue, setSearchValue] = useState('');

  // useEffect(() => {
  //   fetchDataFromBackend();
  // }, []);

  // const fetchDataFromBackend = () => {
  //   axios.get('backend-url')
  //     .then(response => {
  //       // Handle successful response
  //       setAvailableForums(response.data);
  //     })
  //     .catch(error => {
  //       // Handle error
  //       console.error('Error fetching data:', error);
  //     });
  // };

  const handleSearchChange = (event, value) => {
    const stringValue = value !== null ? value.name : ''; // Extract the name property if value is an object
    setSearchValue(stringValue);
  };

  const filterForums = (forum) => {
    console.log('searchValue:', searchValue, typeof searchValue); // Add this line for debugging
    if (!searchValue) return true;
    return forum.name.toLowerCase().includes(searchValue.toLowerCase());
  };

  return (
    <Container>
      <h2>Where Passion Meets Play! Join the GameChangers Community Now!</h2>
      <Autocomplete
  value={searchValue}
  onChange={handleSearchChange}
  options={availableForums}
  getOptionLabel={(option) => (option && option.name) || ''}
  renderInput={(params) => <TextField {...params} label="Search Forums" variant="outlined" />}
  style={{padding: '1em', marginTop: '1em', marginBottom: '1em'}}
/>


      <Row>
        {availableForums.filter(filterForums).map((forum) => (
          <Col key={forum.id} xs={12} sm={6} md={4} lg={4} xl={4}>
            <Card style={{ height: '400px', marginBottom: '20px' }}>
              <div style={{ height: '75%', padding: '10px' }}>
                <img src={forum.imageUrl} alt="Forum" style={{ width: '100%', height: '100%', borderRadius: '5px' }} />
              </div>
              <div style={{ height: '25%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <Avatar alt="Avatar" src="https://via.placeholder.com/50" style={{ marginRight: '10px' }} />
                  <div style={{display: 'flex', flexDirection: 'column',}}>
                    <span style={{fontWeight: 'bold'}}>{forum.name}</span>
                    <span>{forum.creator}</span>
                 </div>
                </div>
                <div style={{width: '33%'}}>
                  <Badge badgeContent={forum.likes} color="primary" style={{ margin: '10px', padding: '6px' }}>
                    <RiHeartAddFill style={{fontSize: '25px'}}/>
                  </Badge>
                  <Badge badgeContent={forum.members} color="secondary" style={{ margin: '10px', padding: '5px' }}>
                    <MdGroupAdd style={{fontSize: '25px'}}/>
                  </Badge>
                </div>
              </div>
              <div style={{ padding: '10px' }}>
                <Button variant="contained" color="primary" fullWidth>Join Now</Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GlobalForum;
