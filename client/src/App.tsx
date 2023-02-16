import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import NavigationBar from './components/ui/NavigationBar/NavigationBar';

function App(): JSX.Element {
  return (
    <Container>
      <NavigationBar />
      <Routes>
        <Route path="/" />
      </Routes>
    </Container>
  );
}

export default App;
