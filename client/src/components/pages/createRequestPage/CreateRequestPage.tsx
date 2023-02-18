import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { MuiFileInput } from 'mui-file-input';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { checkAuth } from '../../../redux/userSlice/userReducer';
import { useAppDispatch } from '../../../redux/hooks';

export default function CreateRequestPage(): JSX.Element {
  const [file, setFile] = useState(null);

  //   const handleChange = () => {
  //     setFile();
  //   };

  return (
    <section className="promo">
      <div className="container">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/99/99072.png"
            alt="logo"
            className="logoImg"
          />

          <div className="logoText">FoodSher</div>

          <div>
            <Typography
              variant="h6"
              gutterBottom
              fontSize={46}
              textAlign="center"
              color="warning.main"
            >
              Новая заявка
            </Typography>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="Название заявки"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <MuiFileInput placeholder="Прикрепить логотип" value={file} />

                  {/* <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                /> */}
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="address1"
                    name="address1"
                    label="Краткое описание заявки"
                    fullWidth
                    autoComplete="shipping address-line1"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="datetime-local"
                    label="Срок действия заявки"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    sx={{ width: 250 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="Адрес получения (продажи)"
                    fullWidth
                    autoComplete="shipping address-level2"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <MuiFileInput placeholder="Загрузить список продуктов (.xcl)" value={file} />
                </Grid>
              </Grid>
              <Grid item xs={3} sm={1}>
                <Button variant="outlined" size="large" sx={{ p: 3, ml: 25 }}>
                  Отправить заявку
                </Button>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
