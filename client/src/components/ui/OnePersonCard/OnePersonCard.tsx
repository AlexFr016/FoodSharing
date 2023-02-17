import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonGroup } from '@mui/material';

export default function OnePersonCard(): JSX.Element {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 10,
        boxShadow: 10,
        bgcolor: 'red',
        height: 515,
      }}
    >
      <CardMedia
        sx={{ height: 235 }}
        component="img"
        alt="partner photo"
        image="https://yt3.googleusercontent.com/7hEuTuz61XTJuYYxXRKwcnlImTx4e3erahW-H6je0TCwtVsiRqaWIN71HKNW48wMZLflEV_4zg=s900-c-k-c0x00ffffff-no-rj"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ФИО
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          email
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Пароль
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Телефон
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Редактировать профиль</Button>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button size="small">Сохранить</Button>
          <Button size="small">Отмена</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
