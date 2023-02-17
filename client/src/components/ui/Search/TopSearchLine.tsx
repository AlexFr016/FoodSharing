import { Container, Grid } from '@mui/material';
import React from 'react';
import Button from '@mui/material-next/Button';
import SearchInput from './SearchInput';

export default function TopSearchLine(): JSX.Element {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={10}>
          <SearchInput />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button disabled={false} sx={{ mt: 1.5 }} size="large" variant="filled">
            Поиск
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
