import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useAppSelector } from '../../../redux/hooks';



export default function RequestCards(): JSX.Element {
  const requests = useAppSelector((store) => store.searchRequests.requests);
  console.log(requests);
  // const searchRequests = requests.filter((request) => request.Products?.title.includes(input));

  return (
    <Container sx={{ py: 6 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={3}>
        {requests.map((request) => (
          <Grid item key={request.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: '6.25%',
                }}
                image="https://avatars.mds.yandex.net/i?id=54b9b5936d827c669e972d6fc8a7d1d0-5498032-images-thumbs&n=13&exp=1"
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {request.title}
                </Typography>
                <Typography>{request.User?.companyName}</Typography>
                <Typography>{request.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Подробнее</Button>
                <StarBorderOutlinedIcon sx={{ ml: 7 }} fontSize="large" />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
