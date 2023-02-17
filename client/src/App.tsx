import { Container } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PersonalAreaPage from './components/pages/PersonalAreaPage/PersonalAreaPage';
import ProfilePersonPage from './components/pages/ProfilePersonPage/ProfilePersonPage';
import NavigationBar from './components/ui/NavigationBar/NavigationBar';
import MainPage from './components/pages/mainPage/MainPage';
import HeaderMainPage from './components/ui/HeaderMainPage/HeaderMainPage';

import SearchPage from './components/pages/searchPage/SearchPage';

import LoginPage from './components/pages/LoginPage/LoginPage';
import SignUpPage from './components/pages/SignUpPage/SignUpPage';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;


function App(): JSX.Element {
  return (
    <Container>
      <NavigationBar />
      <Routes>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/personarea" element={<PersonalAreaPage />} />
        <Route path="/profile" element={<ProfilePersonPage />} />
        <Route path="/header" element={<HeaderMainPage />} />

        <Route path="/search" element={<SearchPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

      </Routes>
    </Container>
  );
}

export default App;
