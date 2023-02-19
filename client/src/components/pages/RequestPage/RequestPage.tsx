import { Box, Grid, Link, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getSingleRequest } from '../../../redux/singleRequestSlice/singleRequestSlice';

export default function RequestPage(): JSX.Element {
  const request = useAppSelector((store) => store.request)
  const {id} = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSingleRequest(id))
    // console.log(request)
  }, [])
  return (
    <Paper
    sx={{
      position: 'relative',
      backgroundColor: 'grey.800',
      color: '#fff',
      mb: 4,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // backgroundImage: `https://upload.wikimedia.org/wikipedia/commons/7/75/La_caza_salvaje_de_Od%C3%ADn%2C_por_Peter_Nicolai_Arbo.jpg`,
    }}
  >
    {/* Increase the priority of the hero background image */}
    {<img style={{ display: 'flex' }} src={request.User.titleLogoPath} alt='afndjfgb' />}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
      }}
    />
    <Grid container>
      <Grid item md={6}>
        <Box
          sx={{
            position: 'relative',
            p: { xs: 3, md: 6 },
            pr: { md: 0 },
          }}
        >
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
           {request.User.companyName}
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            {request.User.description}
          </Typography>
          <Link variant="subtitle1" href="/">
            {request.title}
          </Link>
        </Box>
      </Grid>
    </Grid>
  </Paper>

  );
}
