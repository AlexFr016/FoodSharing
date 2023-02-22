import { Typography, Avatar, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react';
import type { CommentType } from '../../../redux/commentsSlice/commentsSliceType';

type CommentCardPropsType = {
  comment: CommentType;
};

export default function CommentCard({ comment }: CommentCardPropsType): JSX.Element {
  const dateParser = (date: string): string => {
    if (date !== null) {
      const dateArr = date.split('T')[0].split('-');
      return `${dateArr[2]}-ого ${dateArr[1]} ${dateArr[0]} г.`;
    }
  };
  return (
    <Card sx={{bgcolor: '#DCDCDC', opacity: 0.68 }} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <Avatar src={comment.pathPhoto} alt='avatar'/>
      <Grid style={{display: 'flex', flexDirection: 'column', marginLeft: '10px'}}> 
      <Typography >
        {comment.firstName} {comment.lastName} {dateParser(comment.createdAt)}
      </Typography>
      <Typography>{comment.body}</Typography>
      </Grid>
    </Card>
  );
}
