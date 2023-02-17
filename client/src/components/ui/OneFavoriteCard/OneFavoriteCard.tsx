import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

export default function OneFavoriteCard(): JSX.Element {
  return (
    <Card sx={{ width: 400, boxShadow: 10, borderRadius: 10, bgcolor: 'inherit', marginX: 3 }}>
      <CardActions>
        <Button size="small">Редактировать профиль</Button>
      </CardActions>
      <CardMedia
        component="img"
        alt="green iguana"
        height="120"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Название заявки
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Партнер
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Подтвердить заявку</Button>
      </CardActions>
    </Card>
  );
}
