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
    email: '',
    phone: '',
    hashpass: '',
    validpass: '',
    role: '',
  });
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
          Sign up
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
              />
            </Grid>
            <Grid item xs={15} sm={4}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={15}>
              <TextField
                
                id="outlined-basic"
                label="Телефон"
                name="phone"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={15}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={15}>
              <TextField
                
                id="outlined-basic"
                label="Логин"
                name="phone"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={15}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={15}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
    //   </ThemeProvider>
    // <Box
    //   sx={{
    //     marginTop: 8,
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //   }}
    // >
    //   <Grid container spacing={2}>
    //     <Grid item xs={12} sm={6}>
    //       <TextField
    //         value={formInput.firstName}
    //         id="outlined-basic"
    //         label="Ваше имя"
    //         name="firstName"
    //         variant="outlined"
    //         margin="normal"
    //         fullWidth
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <TextField
    //         value={formInput.lastName}
    //         id="outlined-basic"
    //         label="Ваша фамилия"
    //         name="lastName"
    //         variant="outlined"
    //         margin="normal"
    //         fullWidth
    //       />
    //     </Grid>
    //     <Grid item xs={12} sm={6}>
    //       <TextField
    //         value={formInput.secondName}
    //         id="outlined-basic"
    //         label="Ваше отчество"
    //         name="secondName"
    //         variant="outlined"
    //         margin="normal"
    //         fullWidth
    //       />
    //     </Grid>
    //     <Grid item xs={12}>
    //     <TextField

    //       value={formInput.email}
    //       id="outlined-basic"
    //       label="e-mail"
    //       name="email"
    //       variant="outlined"
    //       margin="normal"
    //     />
    //     </Grid>
    //     <Grid item xs={12}>
    //     <TextField

    //       value={formInput.phone}
    //       id="outlined-basic"
    //       label="Телефон"
    //       name="phone"
    //       variant="outlined"
    //       margin="normal"
    //     />
    //     </Grid>
    //     <Grid item xs={12}>
    //     <TextField

    //       value={formInput.hashpass}
    //       id="outlined-basic"
    //       label="Придумайте пароль"
    //       name="hashpass"
    //       type="password"
    //       variant="outlined"
    //       margin="normal"
    //     />
    //     </Grid>
    //     <Grid item xs={12}>
    //     <TextField

    //       value={formInput.validpass}
    //       id="outlined-basic"
    //       label="Повторите пароль"
    //       name="validpass"
    //       type="password"
    //       variant="outlined"
    //       margin="normal"
    //     />
    //     </Grid>

    //     <Button type="submit">Зарегестрироваться</Button>
    //   </Grid>
    // </Box>
  );
}
