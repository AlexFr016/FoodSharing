import { CircularProgress, Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PersonalAreaPage from './components/pages/PersonalAreaPage/PersonalAreaPage';
import ProfilePersonPage from './components/pages/ProfilePersonPage/ProfilePersonPage';
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
import FavoritesPage from './components/pages/FavoritesPage/FavoritesPage';
import { getFavoritesRequestsApi } from './redux/favoritesRequestsSlice/favoritesRequestsSlice';

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
            <Route path="/" element={<Navigate to="/mainpage" />} />

            <Route
              element={
                <PrivateRoute isAllowed={user.status === 'logged'} redirectPath="/mainpage" />
              }
            >
              <Route path="/personarea" element={<PersonalAreaPage />} />
              <Route path="/profile" element={<ProfilePersonPage />} />

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

            <Route
              path="/favorites"
              element={
                <PrivateRoute
                  isAllowed={user.status === 'logged' && user.roleid === 1}
                  redirectPath="/mainpage"
                >
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </>
      )}
    </Container>
  );
}

export default App;
