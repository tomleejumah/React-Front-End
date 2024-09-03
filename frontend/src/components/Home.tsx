import React from 'react';
import { Container, Typography } from '@mui/material';

// Home component for user login and validation 
const Home = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');
  const age = urlParams.get('age');

  // Render home page with user name and age data 
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
        Welcome, {name}!
      </Typography>
      <Typography variant="h6" align="center">
        You are {age} years old.
      </Typography>
    </Container>
  );
};

export default Home;
