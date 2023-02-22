import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import {
  deletePartnerRequest,
  updatePartnerStatusRequest,
} from '../../../redux/partnerRequestsSlice/partnerRequestsReducer';
import type { PartnerRequest } from '../../../redux/partnerRequestsSlice/partnerRequestsType';

type PartnerRequestPropsType = {
  partnerRequest: PartnerRequest;
  render: number;
  setRender: React.Dispatch<React.SetStateAction<number>>;
};

export default function OnePartnerPersonRequestCard({
  partnerRequest,
  setRender,
  render,
}: PartnerRequestPropsType): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Card
      sx={{
        height: 300,
        width: 320,
        boxShadow: 10,
        borderRadius: 6,
        bgcolor: 'rgba(220, 220, 220, 0.68)',
      }}
    >
      <CardMedia
        component="img"
        alt="favorite"
        height="140"
        image={partnerRequest.User.titleLogoPath}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ height: 60 }}>
          {partnerRequest.title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', mb: 3 }}>
        {partnerRequest.statusid === 1 ? (
          <Button
            size="small"
            sx={{ bgcolor: '#f9bf3b', color: '#fff' }}
            onClick={() => {
              dispatch(updatePartnerStatusRequest(partnerRequest.id, 3));
              setRender(render + 1);
            }}
          >
            Закрыть
          </Button>
        ) : (
          <Button
            size="small"
            sx={{ bgcolor: '#f9bf3b', color: '#fff' }}
            onClick={() => {
              dispatch(updatePartnerStatusRequest(partnerRequest.id, 1));
              setRender(render + 1);
            }}
          >
            Восстановить
          </Button>
        )}
        <Button
          sx={{ bgcolor: '#f9bf3b', color: '#fff' }}
          size="small"
          onClick={() => {
            dispatch(deletePartnerRequest(partnerRequest.id));
            setRender(render + 1);
          }}
        >
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
}
