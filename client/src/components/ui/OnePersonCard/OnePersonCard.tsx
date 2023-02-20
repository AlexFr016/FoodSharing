import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useAppSelector } from '../../../redux/hooks';

export default function OnePersonCard(): JSX.Element {
  const user = useAppSelector((store) => store.user);
  const [edit, setEdit] = useState(false);
  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 10,
        boxShadow: 10,
        bgcolor: '#fff',
        height: 515,
        marginX: 3,
      }}
    >
      <CardMedia
        sx={{ height: 250, objectFit: 'cover' }}
        component="img"
        alt="partner photo"
        image="https://virtus-img.cdnvideo.ru/images/as-is/plain/15/150f5599-d4d4-473f-9000-ca6d1a9491c5.jpg@jpg"
      />
      <CardContent sx={{ textAlign: 'center', fontFamily: 'monospace' }}>
        {!edit && user.status === 'logged' ? (
          <>
            <Typography gutterBottom variant="h5" component="div">
              {[user.firstName, ' ', user.lastName, ' ', user.secondName]}
            </Typography>
            {user.roleid === 3 && (
              <Typography gutterBottom variant="h5" component="div">
                {user.companyName}
              </Typography>
            )}
            <Typography gutterBottom variant="h5" component="div">
              {user.email}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {user.phone}
            </Typography>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button
                variant="contained"
                size="small"
                sx={{ bgcolor: '#F8C621' }}
                onClick={() => setEdit(true)}
              >
                Редактировать профиль
              </Button>
            </CardActions>
          </>
        ) : (
          <Box component="form" sx={{ mt: 2, mb: 2 }}>
            <Grid container>
              <Grid item xs={15}>
                <TextField id="standard-basic" label="Standard" variant="standard" />
              </Grid>
              {user.status === 'logged' && user.roleid === 3 && (
                <Grid item xs={15}>
                  <TextField id="standard-basic" label="Standard" variant="standard" />
                </Grid>
              )}
              <Grid item xs={15}>
                <TextField id="standard-basic" label="Standard" variant="standard" />
              </Grid>
              <Grid item xs={15}>
                <TextField id="standard-basic" label="Standard" variant="standard" />
              </Grid>
            </Grid>
            <CardActions sx={{ justifyContent: 'center' }}>
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button size="small">Сохранить</Button>
                <Button size="small" onClick={() => setEdit(false)}>
                  Отмена
                </Button>
              </ButtonGroup>
            </CardActions>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
