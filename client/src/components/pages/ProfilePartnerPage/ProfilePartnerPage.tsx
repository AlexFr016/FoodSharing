import { Container, Grid } from '@mui/material';
import React from 'react';
import AboutPartnerCard from '../../ui/AboutPartnerCard/AboutPartnerCard';
import OneProfileCard from '../../ui/OnePersonCard/OneProfileCard';
import OnePartnerRequestCard from '../../ui/OneRequestCard/OnePartnerRequestCard';
import OneStatisticCard from '../../ui/OneStatisticCard/OneStatisticCard';

export default function ProfilePartnerPage(): JSX.Element {
  return (
    <Container
      fixed
      sx={{
        height: '100vh',
      }}
    >
      <Grid
        style={{ display: 'flex', justifyContent: 'center', padding: '50px', alignItems: 'center' }}
      >
        <OneProfileCard />
        <Grid>
          <OneStatisticCard />
          <AboutPartnerCard />
        </Grid>
      </Grid>
      <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <OnePartnerRequestCard />
        <OnePartnerRequestCard />
      </Grid>
    </Container>
  );
}
