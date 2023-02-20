import {
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
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
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={10}>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
            <OutlinedInput
              value={input}
              onChange={changeHandler}
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start" />}
              label="Search"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button disabled={false} sx={{ mt: 1.5 }} size="large" variant="filled">
            Поиск
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
