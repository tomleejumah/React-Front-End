import React from 'react';
import { Typography, Container } from '@mui/material';

const Home = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  const age = urlParams.get('age');

  return (
    <Container 
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Successfully logged in as {name}!
      </Typography>
      <Typography variant="h6" align="center">
        Your age is {age} years old.
      </Typography>
    </Container>
  );
};

export default Home;
