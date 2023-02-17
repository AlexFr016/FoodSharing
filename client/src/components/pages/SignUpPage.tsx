import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { Copyright } from '@mui/icons-material';

export default function SignUpPage(): JSX.Element {
  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    secondName: '',
    login: '',
    email: '',
    phone: '',
    hashpass: '',
    validpass: '',
    role: '',
  });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
  setFormInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    // <ThemeProvider >
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
            <Grid item xs={15} sm={4}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                value={formInput.firstName}
                id="firstName"
                label="First Name"
                autoFocus
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={15} sm={4}>
              <TextField
              value={formInput.lastName}
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={15} sm={4}>
              <TextField
                required
                fullWidth
                value={formInput.secondName}
                id="secondName"
                label="Second Name"
                name="secondName"
                autoComplete="family-name"
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={15}>
              <TextField
                value={formInput.phone}
                id="outlined-basic"
                label="Телефон"
                name="phone"
                variant="outlined"
                fullWidth
                onChange={changeHandler}
              />
            </Grid>
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
                value={formInput.login}
                id="outlined-basic"
                label="Логин"
                name="phone"
                variant="outlined"
                fullWidth
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
            <Grid item xs={15}>
              <TextField
              value={formInput.validpass}
                required
                fullWidth
                name="validpass"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={changeHandler}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Зарегестрироваться!
          </Button>
        </Box>
      </Box>
    </Container>
    //   </ThemeProvider>
  );
}
