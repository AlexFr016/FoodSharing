import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import NavigationBar from './components/ui/NavigationBar/NavigationBar';
import MainPage from './components/pages/mainPage/MainPage';
import HeaderMainPage from './components/ui/HeaderMainPage/HeaderMainPage';
import SearchPage from './components/pages/searchPage/SearchPage';

function App(): JSX.Element {
  return (
    <Container>
      <NavigationBar />
      <Routes>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/header" element={<HeaderMainPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Container>
  );
}

export default App;
