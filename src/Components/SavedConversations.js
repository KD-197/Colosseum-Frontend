import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { Container, Row, Col } from 'react-bootstrap';

const conversationsData = [
  {
    id: 1,
    avatarUrl: 'https://via.placeholder.com/50',
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
  },
  {
    id: 2,
    avatarUrl: 'https://via.placeholder.com/50',
    name: 'Jane Smith',
    lastMessage: 'Can you send me the report?',
  }
];

const SavedConversations = () => (
  <Container>
    <h2>Saved Conversations</h2>
    <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
      <Row>
        <Col>
          <List sx={{ width: '100%', maxWidth: 360 }}>
            {conversationsData.map(conversation => (
              <ListItem key={conversation.id}>
                <ListItemAvatar>
                  <Avatar alt="Avatar" src={conversation.avatarUrl} />
                </ListItemAvatar>
                <ListItemText
                  primary={conversation.name}
                  secondary={conversation.lastMessage}
                />
              </ListItem>
            ))}
          </List>
        </Col>
      </Row>
    </div>
  </Container>
);

export default SavedConversations;
