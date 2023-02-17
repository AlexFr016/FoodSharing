import { Container } from '@mui/system';
import React from 'react';
import AboutPartnerCard from '../../ui/AboutPartnerCard/AboutPartnerCard';
import OneFavoriteCard from '../../ui/OneFavoriteCard/OneFavoriteCard';
import OnePersonCard from '../../ui/OnePersonCard/OnePersonCard';
import OneStatisticCard from '../../ui/OneStatisticCard/OneStatisticCard';

export default function PersonalAreaPage(): JSX.Element {
  return (
    <Container>
      <Container
        fixed
        sx={{
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '50px',
            alignItems: 'center',
          }}
        >
          <OnePersonCard />

          <div>
            <OneStatisticCard />
            <AboutPartnerCard />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <OneFavoriteCard />
          <OneFavoriteCard />
        </div>
      </Container>
    </Container>
  );
}
