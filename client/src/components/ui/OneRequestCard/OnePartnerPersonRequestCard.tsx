import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import {
  deletePartnerRequest,
  updatePartnerStatusRequest,
} from '../../../redux/partnerRequestsSlice/partnerRequestsReducer';
import type { PartnerRequest } from '../../../redux/partnerRequestsSlice/partnerRequestsType';

type PartnerRequestPropsType = {
  partnerRequest: PartnerRequest;
};

export default function OnePartnerPersonRequestCard({
  partnerRequest,
}: PartnerRequestPropsType): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Card
      sx={{ height: 300, width: 320, boxShadow: 10, borderRadius: 10, bgcolor: '#fff', marginX: 3 }}
    >
      <CardMedia
        component="img"
        alt="favorite"
        height="120"
        image={partnerRequest.User.titleLogoPath}
        sx={{ padding: '1em 1em 0 1em', objectFit: 'cover' }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ alignItems: 'center', height: 60 }}
        >
          {partnerRequest.title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', mb: 3 }}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          {partnerRequest.statusid === 1 ? (
            <Button
              size="small"
              onClick={() => dispatch(updatePartnerStatusRequest(partnerRequest.id, 3))}
            >
              Закрыть
            </Button>
          ) : (
            <Button
              size="small"
              onClick={() => dispatch(updatePartnerStatusRequest(partnerRequest.id, 1))}
            >
              Восстановить
            </Button>
          )}
          <Button size="small" onClick={() => dispatch(deletePartnerRequest(partnerRequest.id))}>
            Удалить
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
