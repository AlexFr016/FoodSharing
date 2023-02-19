import { Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function RequestPage(): JSX.Element {
  const {id} = useParams();
  return (
    <Grid xs={15} sm={15} md={4}>
      <Grid>
        <div>
          <img>rec creator photo</img>
        </div>
        <div>
          <h1>Name of creator</h1>
          <p>his info</p>
        </div>
      </Grid>
      <div className="lower">
        Map product cards here
        <div className="prodCard">
          <img>Product photo</img>
          <h2>Prod name</h2>
          <p>Amount</p>
        </div>
      </div>
    </Grid>
  );
}
