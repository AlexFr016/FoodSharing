import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import AboutPartnerCard from '../../ui/AboutPartnerCard/AboutPartnerCard';
import OneFavoriteCard from '../../ui/OneFavoriteCard/OneFavoriteCard';
import OnePersonCard from '../../ui/OnePersonCard/OnePersonCard';
import OneStatisticCard from '../../ui/OneStatisticCard/OneStatisticCard';

export default function PersonalAreaPage(): JSX.Element {
  return (
    <Container
      fixed
      sx={{
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
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
        <OnePersonCard />

        <Grid>
          <OneStatisticCard />
          <AboutPartnerCard />
        </Grid>
      </Grid>
      <Grid xs={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <OneFavoriteCard />
        <OneFavoriteCard />
      </Grid>
    </Container>
  );
}
