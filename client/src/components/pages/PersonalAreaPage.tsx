import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import OnePersonCard from '../ui/OnePersonCard/OnePersonCard';

export default function PersonalAreaPage(): JSX.Element {
  return (
    <Container
      sx={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/top-view-of-vegetables-as-coriander-tomato-spinach-green-mint-leaves-on-wooden-surface-with-copy-space_141793-10306.jpg?w=1380&t=st=1676620702~exp=1676621302~hmac=143ef0f5b38a3a916c987ef459040fcfe722cc9c8be4f9a5dd304c40b5b54757")',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container xs={8}>
        <OnePersonCard />
      </Grid>
    </Container>
  );
}
