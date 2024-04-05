import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Paper, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

const LeagueScoreboard = ({ leagueName }) => {

  const dummyScoreboardData = [
    { id: 1, name: 'Player 1', points: 20, wins: 5, losses: 2 },
    { id: 2, name: 'Player 2', points: 18, wins: 4, losses: 3 },
    { id: 3, name: 'Player 3', points: 15, wins: 3, losses: 4 },
    { id: 4, name: 'Player 4', points: 12, wins: 2, losses: 5 },
  ];

  const [scoreboardData, setScoreboardData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend here
    // Replace this with your actual API call
    // For now, use dummy data
    // fetch('/api/scoreboardData')
    //   .then(response => response.json())
    //   .then(data => setScoreboardData(data))
    //   .catch(error => console.error('Error fetching scoreboard data:', error));
    setScoreboardData(dummyScoreboardData);
  }, []);

  return (
    <Container>
      <h2>{leagueName} Scoreboard</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Points</TableCell>
              <TableCell>Wins</TableCell>
              <TableCell>Losses</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {scoreboardData.map((player, index) => (
              <TableRow key={player.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.points}</TableCell>
                <TableCell>{player.wins}</TableCell>
                <TableCell>{player.losses}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default LeagueScoreboard;
