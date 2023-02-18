import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonGroup } from '@mui/material';
import { useAppSelector } from '../../../redux/hooks';

export default function OnePersonCard(): JSX.Element {
  const user = useAppSelector((store) => store.user);
  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 10,
        boxShadow: 10,
        bgcolor: 'inherit',
        height: 515,
        marginX: 3,
      }}
    >
      <CardMedia
        sx={{ height: 250, padding: '1em 1em 0 1em', objectFit: 'contain' }}
        component="img"
        alt="partner photo"
        image="https://yt3.googleusercontent.com/7hEuTuz61XTJuYYxXRKwcnlImTx4e3erahW-H6je0TCwtVsiRqaWIN71HKNW48wMZLflEV_4zg=s900-c-k-c0x00ffffff-no-rj"
      />
      <CardContent>
        {user.status === 'logged' ? (
          <>
            <Typography gutterBottom variant="h5" component="div">
              {user.status === 'logged' && [
                user.firstName,
                ' ',
                user.lastName,
                ' ',
                user.secondName,
              ]}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {user.status === 'logged' && user.email}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {user.status === 'logged' && user.phone}
            </Typography>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant="contained" size="small" sx={{ bgcolor: '#F8C621' }}>
                Редактировать профиль
              </Button>
            </CardActions>
            <CardActions sx={{ justifyContent: 'center' }}>
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button size="small">Сохранить</Button>
                <Button size="small">Отмена</Button>
              </ButtonGroup>
            </CardActions>
          </>
        ) : null}
      </CardContent>
    </Card>
  );
}
