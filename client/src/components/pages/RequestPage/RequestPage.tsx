import {
  Box,
  Collapse,
  Grid,
  IconButton,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { getSingleRequest } from '../../../redux/singleRequestSlice/singleRequestSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import ProdTable from '../../ui/ProdTable/ProdTable';

export default function RequestPage(): JSX.Element {
  const request = useAppSelector((store) => store.request);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSingleRequest(id));
    // console.log(request)
  }, []);
  return (
    <>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${request.User.titleLogoPath})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        <img style={{ display: 'none' }} src={request.User.titleLogoPath} alt="afndjfgb" />
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
                {request.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {request.User.description}
              </Typography>
              <Link variant="subtitle1" href="/">
                {request.User.companyName}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <ProdTable request={request} />
    </>
  );
}
