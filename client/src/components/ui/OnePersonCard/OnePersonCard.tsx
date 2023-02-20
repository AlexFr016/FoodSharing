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
  const [inputs, setInputs] = useState({
    firstName: user.status === 'logged' && user.firstName,
    lastName: user.status === 'logged' && user.lastName,
    secondName: user.status === 'logged' && user.secondName,
    email: user.status === 'logged' && user.email,
    phone: user.status === 'logged' && user.phone,
    companyName: user.status === 'logged' && user.companyName,
  });

  const changeHadler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 10,
        boxShadow: 10,
        bgcolor: '#fff',
        height: 700,
        marginX: 3,
      }}
    >
      <CardMedia
        sx={{ height: 300, objectFit: 'cover' }}
        component="img"
        alt="partner photo"
        image="https://virtus-img.cdnvideo.ru/images/as-is/plain/15/150f5599-d4d4-473f-9000-ca6d1a9491c5.jpg@jpg"
      />
      <CardContent sx={{ textAlign: 'center', fontFamily: 'monospace' }}>
        {!edit && user.status === 'logged' ? (
          <>
            <Typography gutterBottom variant="h5" component="div">
              {[user.firstName, ' ', user.secondName, ' ', user.lastName]}
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
                size="medium"
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
                <TextField
                  sx={{ width: 320 }}
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                  value={inputs.firstName}
                  onChange={changeHadler}
                />
              </Grid>
              <Grid item xs={15}>
                <TextField
                  sx={{ width: 320 }}
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                  value={inputs.secondName}
                  onChange={changeHadler}
                />
              </Grid>
              <Grid item xs={15}>
                <TextField
                  sx={{ width: 320 }}
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                  value={inputs.lastName}
                  onChange={changeHadler}
                />
              </Grid>
              {user.status === 'logged' && user.roleid === 3 && (
                <Grid item xs={15}>
                  <TextField
                    sx={{ width: 320 }}
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                    value={inputs.companyName}
                    onChange={changeHadler}
                  />
                </Grid>
              )}
              <Grid item xs={15}>
                <TextField
                  sx={{ width: 320 }}
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={15}>
                <TextField
                  sx={{ width: 320 }}
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                />
              </Grid>
            </Grid>
            <CardActions sx={{ justifyContent: 'center', mt: 3 }}>
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button size="small" type="submit">
                  Сохранить
                </Button>
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
