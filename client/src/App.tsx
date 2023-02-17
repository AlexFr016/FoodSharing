import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import NavigationBar from './components/ui/NavigationBar/NavigationBar';
import LoginPage from './components/pages/LoginPage';

function App(): JSX.Element {
  return (
    <Container>
      <NavigationBar />
      <LoginPage />
      <Routes>
        <Route path="/" />
      </Routes>
    </Container>
  );
}

export default App;
