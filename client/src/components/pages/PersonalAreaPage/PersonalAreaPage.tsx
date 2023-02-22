import { Button, ButtonGroup, CardActions, createTheme, Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  getActivePartnerRequests,
  getUnactivePartnerRequests,
} from '../../../redux/partnerRequestsSlice/partnerRequestsReducer';
import AboutPartnerCard from '../../ui/AboutPartnerCard/AboutPartnerCard';
import OneFavoriteCard from '../../ui/OneFavoriteCard/OneFavoriteCard';
import OnePersonCard from '../../ui/OnePersonCard/OnePersonCard';
import OnePartnerPersonRequestCard from '../../ui/OneRequestCard/OnePartnerPersonRequestCard';

const theme = createTheme({
  palette: {
    action: {
      disabledBackground: 'green',
      disabled: 'white',
    },
  },
});

export default function PersonalAreaPage(): JSX.Element {
  const user = useAppSelector((store) => store.user);
  const partnerRequests = useAppSelector((store) => store.partnerRequests.partnerRequests);
  const dispatch = useAppDispatch();
  const [activeL, setActiveL] = useState(true);
  const [activeR, setActiveR] = useState(false);
  const [render, setRender] = useState(0);
  console.log('>>>>>>>>>>', render);

  useEffect(() => {
    if (activeL) dispatch(getActivePartnerRequests());
    if (activeR) dispatch(getUnactivePartnerRequests());
  }, [render, activeL, activeR, dispatch]);

  const changeActiveHandlerR = (): void => {
    setActiveL(false);
    setActiveR(true);
  };

  const changeActiveHandlerL = (): void => {
    setActiveL(true);
    setActiveR(false);
  };

  return (
    <Container
      fixed
      sx={{
        height: '100vh',
      }}
    >
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '50px',
          alignItems: 'center',
        }}
      >
        {user.status === 'logged' && <OnePersonCard />}
        <Grid>{user.status === 'logged' && user.roleid === 3 && <AboutPartnerCard />}</Grid>
      </Grid>
      {user.status === 'logged' && user.roleid === 3 && (
        <>
          <Grid
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 30 }}
          >
            Мои заявки
          </Grid>
          <Grid
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 30 }}
          >
            <CardActions sx={{ justifyContent: 'center', mb: 3 }}>
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button
                  size="medium"
                  onClick={changeActiveHandlerL}
                  sx={{ bgcolor: '#f9bf3b', color: '#fff' }}
                  disabled={activeL}
                  classes={theme}
                >
                  Действующие заявки
                </Button>
                <Button
                  sx={{ bgcolor: '#f9bf3b', color: '#fff' }}
                  size="medium"
                  onClick={changeActiveHandlerR}
                  disabled={activeR}
                >
                  Архив заявок
                </Button>
              </ButtonGroup>
            </CardActions>
          </Grid>
          <Grid
            container
            columns={19}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {partnerRequests.map((partnerRequest) => (
              <Grid item xs={6} sx={{ padding: 4 }}>
                <OnePartnerPersonRequestCard
                  partnerRequest={partnerRequest}
                  render={render}
                  setRender={setRender}
                  key={partnerRequest.id}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {user.status === 'logged' && user.roleid === 1 && (
        <>
          <Grid
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 30 }}
          >
            Мои заявки
          </Grid>
          <Grid
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 4 }}
          >
            <OneFavoriteCard />
            <OneFavoriteCard />
          </Grid>
        </>
      )}
    </Container>
  );
}
