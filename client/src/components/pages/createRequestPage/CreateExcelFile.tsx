import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import { MuiFileInput } from 'mui-file-input';
import axios from 'axios';

export default function CreateExcelFile(): JSX.Element {
  const [file, setFile] = useState<FileList | null>();
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.files);
    setFile(e.currentTarget.files);
  };
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData: FormData = new FormData();
    formData.append('productName', file[0]);
    const res = await axios.post<string>('/api/post/newproduct', formData);
    console.log({ post: res.data });

    // dispatch(loginHandler(formInput));
    e.currentTarget.reset();
  };
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={(e) => submitHandler(e)}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <input
            onChange={(e) => changeHandler(e)}
            placeholder="Загрузить список продуктов (.xcl)"
            name="productName"
            type="file"
            accept=".xlsx"
          />
        </Grid>

        <Grid item xs={3} sm={1}>
          <Button type="submit" variant="outlined" size="large" sx={{ p: 3, ml: 25 }}>
            Отправить форму
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
