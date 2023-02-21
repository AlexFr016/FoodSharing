import { Typography, Avatar, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react';
import type { CommentType } from '../../../redux/commentsSlice/commentsSliceType';

type CommentCardPropsType = {
  comment: CommentType;
};

export default function CommentCard({ comment }: CommentCardPropsType): JSX.Element {
  return (
    <Card style={{display: 'flex', flexDirection: 'row'}}>
      <Avatar src={comment.pathPhoto} alt='avatar'/>
      <Grid style={{display: 'flex', flexDirection: 'column'}}> 
      <Typography>
        {comment.firstName} {comment.lastName}
      </Typography>
      <Typography>{comment.body}</Typography>
      </Grid>
    </Card>
  );
}
