import { Container, CssBaseline, Grid, Typography } from '@mui/material';
import React from 'react';
import CheckBoxes from './CheckBoxes';
import PlaceHolderCategory from './PlaceHolderCategory';
import RequestCards from './RequestCards';
import SortLinks from './SortLinks';

export default function BodySearch(): JSX.Element {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h5">Поиск по фильтрам:</Typography>
          <CssBaseline />
          <PlaceHolderCategory />

          <Typography variant="h5">По скидке:</Typography>
          <CheckBoxes />
          <Typography variant="h5">По рейтингу:</Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <SortLinks />
          <RequestCards />
        </Grid>
      </Grid>
    </Container>
  );
}
