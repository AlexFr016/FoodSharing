import { Container } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PersonalAreaPage from './components/pages/PersonalAreaPage';
import ProfilePersonPage from './components/pages/ProfilePersonPage';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;

function App(): JSX.Element {
  return (
    <Container>
      <Routes>
        <Route path="/personarea" element={<PersonalAreaPage />} />
        <Route path="/profile" element={<ProfilePersonPage />} />
      </Routes>
    </Container>
  );
}

export default App;
