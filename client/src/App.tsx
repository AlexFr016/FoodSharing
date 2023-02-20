import { CircularProgress, Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PersonalAreaPage from './components/pages/PersonalAreaPage/PersonalAreaPage';
import NavigationBar from './components/ui/NavigationBar/NavigationBar';
import MainPage from './components/pages/mainPage/MainPage';
import HeaderMainPage from './components/ui/HeaderMainPage/HeaderMainPage';
import CreateRequestPage from './components/pages/createRequestPage/CreateRequestPage';
import SearchPage from './components/pages/searchPage/SearchPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import SignUpPage from './components/pages/SignUpPage/SignUpPage';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { checkAuth } from './redux/userSlice/userReducer';
import PrivateRoute from './components/HOC/PrivateRoute';
import PartnersPage from './components/pages/PartnersPage/PartnersPage';
import ProfilePartnerPage from './components/pages/ProfilePartnerPage/ProfilePartnerPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.user);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <Container>
      {user.status === 'fetching' ? (
        <CircularProgress />
      ) : (
        <>
          <NavigationBar />
          <Routes>
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/partners/:id" element={<ProfilePartnerPage />} />

            <Route
              element={
                <PrivateRoute isAllowed={user.status === 'logged'} redirectPath="/mainpage" />
              }
            >
              <Route path="/personarea" element={<PersonalAreaPage />} />

              <Route
                path="/createrequest"
                element={
                  <PrivateRoute
                    isAllowed={user.status === 'logged' && user.roleid === 3}
                    redirectPath="/mainpage"
                  >
                    <CreateRequestPage />
                  </PrivateRoute>
                }
              />
              <Route path="/search" element={<SearchPage />} />
            </Route>

            <Route
              element={
                <PrivateRoute isAllowed={user.status === 'empty'} redirectPath="/mainpage" />
              }
            >
              <Route
                element={
                  <PrivateRoute isAllowed={user.status === 'empty'} redirectPath="/mainpage" />
                }
              >
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
              </Route>
            </Route>
          </Routes>
        </>
      )}
    </Container>
  );
}

export default App;
