import { Card, CardContent, Rating, Typography } from '@mui/material';
import React from 'react';

export default function OneStatisticCard(): JSX.Element {
  return (
    <Card sx={{ maxWidth: 400, boxShadow: 10, borderRadius: 10, bgcolor: 'red' }}>
      <CardContent>
        <Rating name="size-large" defaultValue={4} size="large" />
        <Typography gutterBottom variant="h5" component="div">
          Спасено еды
        </Typography>
      </CardContent>
    </Card>
  );
}
