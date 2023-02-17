import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import NavigationBar from './components/ui/NavigationBar/NavigationBar';
import MainPage from './components/pages/mainPage/MainPage';
import HeaderMainPage from './components/ui/HeaderMainPage/HeaderMainPage';

function App(): JSX.Element {
  return (
    <Container>
      <NavigationBar />
      <LoginPage />
      <Routes>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/header" element={<HeaderMainPage />} />
      </Routes>
    </Container>
  );
}

export default App;
