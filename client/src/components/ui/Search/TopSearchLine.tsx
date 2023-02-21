import {
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import Button from '@mui/material-next/Button';
import { useAppDispatch } from '../../../redux/hooks';

export default function TopSearchLine(): JSX.Element {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState('');
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => setInput(e.target.value),
    [],
  );

  useEffect(() => {
    dispatch({ type: 'SEARCH_REQUESTS_ON_PRODUCT_NAME', payload: input });
  }, [input]);

  return (
    <Container style={{ marginTop: '10px', marginBottom: '10px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth sx={{ m: 1 }}>
            {/* <InputLabel htmlFor="outlined-adornment-amount">Продукт</InputLabel> */}
            {/* <OutlinedInput
              value={input}
              onChange={changeHandler}
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start" />}
              label="Search"
            /> */}
            <TextField
              id="outlined-basic"
              label="Введите название продукта..."
              variant="outlined"
              value={input}
              onChange={changeHandler}
            />
          </FormControl>
        </Grid>
        {/* <Grid item xs={12} sm={2}>
          <Button disabled={false} sx={{ mt: 1.5 }} size="large" variant="filled">
            Поиск
          </Button>
        </Grid> */}
      </Grid>
    </Container>
  );
}
