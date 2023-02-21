import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../../redux/hooks';

export default function OnePartnerPersonRequestCard(): JSX.Element {
  const request = useAppSelector((store) => store.request);
  const user = useAppSelector((store) => store.user);
  return (
    <Card sx={{ maxWidth: 320, boxShadow: 10, borderRadius: 10, bgcolor: '#fff', marginX: 3 }}>
      <CardMedia
        component="img"
        alt="favorite"
        height="120"
        image="https://yt3.googleusercontent.com/7hEuTuz61XTJuYYxXRKwcnlImTx4e3erahW-H6je0TCwtVsiRqaWIN71HKNW48wMZLflEV_4zg=s900-c-k-c0x00ffffff-no-rj"
        sx={{ padding: '1em 1em 0 1em', objectFit: 'contain' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ alignItems: 'center' }}>
          {request.title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', mb: 3 }}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button size="small">Закрыть</Button>
          <Button size="small">Удалить</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
