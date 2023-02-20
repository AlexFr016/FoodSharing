import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import AboutPartnerCard from '../../ui/AboutPartnerCard/AboutPartnerCard';
import OneFavoriteCard from '../../ui/OneFavoriteCard/OneFavoriteCard';
import OnePersonCard from '../../ui/OnePersonCard/OnePersonCard';
import OnePartnerRequestCard from '../../ui/OneRequestCard/OnePartnerRequestCard';
import OneStatisticCard from '../../ui/OneStatisticCard/OneStatisticCard';

export default function PersonalAreaPage(): JSX.Element {
  const user = useAppSelector((store) => store.user);
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
        <Grid>
          <OneStatisticCard />
          {user.status === 'logged' && user.roleid === 3 && <AboutPartnerCard />}
        </Grid>
      </Grid>
      <Grid style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {user.status === 'logged' && user.roleid === 1 && (
          <>
            <OneFavoriteCard />
            <OneFavoriteCard />
          </>
        )}
        {user.status === 'logged' && user.roleid === 3 && (
          <>
            <OnePartnerRequestCard />
            <OnePartnerRequestCard />
          </>
        )}
      </Grid>
    </Container>
  );
}
