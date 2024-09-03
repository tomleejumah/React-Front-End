import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  const age = urlParams.get('age');

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Welcome, {name}!
      </Typography>
      <Typography variant="h6" align="center">
        You are {age} years old.
      </Typography>
    </Container>
  );
};

export default Home;
