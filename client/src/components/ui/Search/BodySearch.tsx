import { CircularProgress, Container, CssBaseline, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import CheckBoxes from './CheckBoxes';
import PlaceHolderCategory from './PlaceHolderCategory';
import RequestCards from './RequestCards';
import SortLinks from './SortLinks';

export default function BodySearch(): JSX.Element {
  const requests = useAppSelector((store) => store.searchRequests.searchRequests);
  const user = useAppSelector((store) => store.user);

  const getCategoryList = (): string[] =>
    Array.from(
      new Set(
        requests
          .map((request): string[] =>
            request.Products.map((product): string => product?.Category?.title),
          )
          .flat(),
      ),
    );

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h5">Поиск по фильтрам:</Typography>
          <CssBaseline />
          <PlaceHolderCategory categories={getCategoryList()} />

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
