import { Container, Grid } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import OneFavoriteRequestCard from '../../ui/OneFavoriteRequestCard/OneFavoriteRequestCard';

export default function FavoritesPage(): JSX.Element {
  const favorites = useAppSelector((store) => store.favoritesRequests.favorites);
  console.log(favorites);
  // const searchRequests = requests.filter((request) => request.Products?.title.includes(input));

  return (
    <Container sx={{ py: 6 }} maxWidth="md">
      <Grid container spacing={3}>
        {favorites.map((request) => (
          <OneFavoriteRequestCard key={request.id} request={request} />
        ))}
      </Grid>
    </Container>
  );
}
