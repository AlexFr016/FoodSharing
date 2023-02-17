import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ButtonGroup } from '@mui/material';

export default function LoginPage(): JSX.Element {
  const [formInput, setFormInput] = useState({
    email: '',
    hashpass: '',
  });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Заполните форму для регистрации:
        </Typography>
        <Box component="form" noValidate sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={15}>
              <TextField
                value={formInput.email}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={15}>
              <TextField
                value={formInput.hashpass}
                required
                fullWidth
                name="hashpass"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={changeHandler}
              />
            </Grid>
          </Grid>
          {/* <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="outlined primary button group"
          > */}
          <Grid sx={{ mt: 3, mb: 2 }} container spacing={2}>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Войти
            </Button>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Зарегестрироваться
            </Button>
          </Grid>
          {/* </ButtonGroup> */}
        </Box>
      </Box>
    </Container>
  );
}
