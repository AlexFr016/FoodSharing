import { CircularProgress, Container, CssBaseline, Grid, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import CheckBoxes from './CheckBoxes';
import PlaceHolderCategory from './PlaceHolderCategory';
import RequestCards from './RequestCards';
import SortLinks from './SortLinks';

export default function BodySearch(): JSX.Element {
  const requests = useAppSelector((store) => store.searchRequests.requests);
  const user = useAppSelector((store) => store.user);

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
          <Container sx={{ py: 6 }} maxWidth="md">
            {requests.length === 0 ? (
              <CircularProgress />
            ) : (
              <Grid container spacing={3}>
                {requests.map((request) => (
                  <RequestCards key={request.id} request={request} />
                ))}
              </Grid>
            )}
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
