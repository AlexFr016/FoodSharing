import { Card, CardContent, Rating, Typography } from '@mui/material';
import React from 'react';

export default function OneStatisticCard(): JSX.Element {
  return (
    <Card sx={{ width: 400, boxShadow: 10, borderRadius: 10, bgcolor: 'inherit', marginX: 3 }}>
      <CardContent>
        <Rating name="size-large" defaultValue={4} size="large" />
        <Typography gutterBottom variant="h5" component="div">
          Спасено еды
        </Typography>
      </CardContent>
    </Card>
  );
}
