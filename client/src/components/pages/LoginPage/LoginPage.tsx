import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';

export default function LoginPage(): JSX.Element {
  const [formInput, setFormInput] = useState({
    email: '',
    pass: '',
  });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <Container component="main" maxWidth="lg" sx={{ height: '100vh' }}>
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
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={15}>
              <TextField
                value={formInput.pass}
                required
                fullWidth
                name="pass"
                label="Password"
                type="password"
                id="password"
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
            <Button
              component={Link}
              className="promoBtn"
              to="/"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Войти
            </Button>
            <Button
              className="promoBtn"
              component={Link}
              to="/signup"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Зарегестрироваться
            </Button>
          </Grid>
          {/* </ButtonGroup> */}
        </Box>
      </Box>
    </Container>
  );
}
