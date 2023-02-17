import { Container } from '@mui/material';
import React from 'react';
import AboutPartnerCard from '../../ui/AboutPartnerCard/AboutPartnerCard';
import OneFavoriteCard from '../../ui/OneFavoriteCard/OneFavoriteCard';
import OnePersonCard from '../../ui/OnePersonCard/OnePersonCard';
import OneStatisticCard from '../../ui/OneStatisticCard/OneStatisticCard';

export default function ProfilePersonPage(): JSX.Element {
  return (
    <Container
      fixed
      sx={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/top-view-of-vegetables-as-coriander-tomato-spinach-green-mint-leaves-on-wooden-surface-with-copy-space_141793-10306.jpg?w=1380&t=st=1676620702~exp=1676621302~hmac=143ef0f5b38a3a916c987ef459040fcfe722cc9c8be4f9a5dd304c40b5b54757")',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '50px', alignItems: 'center' }}
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
  );
}
