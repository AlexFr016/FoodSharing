import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { loadOnePartner } from '../../../redux/partnersSlice/partnersReducer';

export default function OneProfileCard(): JSX.Element {
  const partner = useAppSelector((store) => store.partners.partners[0]);

  return (
    <Card
      sx={{
        maxWidth: 400,
        borderRadius: 10,
        boxShadow: 10,
        bgcolor: '#fff',
        height: 515,
        marginX: 3,
      }}
    >
      <CardMedia
        sx={{ height: 250, objectFit: 'cover' }}
        component="img"
        alt="partner photo"
        image="https://virtus-img.cdnvideo.ru/images/as-is/plain/15/150f5599-d4d4-473f-9000-ca6d1a9491c5.jpg@jpg"
      />
      <CardContent sx={{ textAlign: 'center', fontFamily: 'monospace' }}>
        <Typography gutterBottom variant="h5" component="div">
          {[partner.firstName, ' ', partner.secondName, ' ', partner.lastName]}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {partner.companyName}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {partner.email}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {partner.phone}
        </Typography>
      </CardContent>
    </Card>
  );
}
