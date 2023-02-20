import { Card } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../../redux/hooks';

export default function AboutPartnerCard(): JSX.Element {
  const user = useAppSelector((store) => store.user);

  return (
    <Card
      sx={{
        maxWidth: 400,
        height: 400,
        overflowY: 'scroll',
        bgcolor: '#fff',
        borderRadius: 10,
        boxShadow: 10,
        padding: 3,
        marginX: 3,
      }}
    >
      <h2>{user.status === 'logged' && user.roleid === 3 && user.description}</h2>
    </Card>
  );
}
