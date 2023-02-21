import React from 'react';
import type { CommentType } from '../../../redux/commentsSlice/commentsSliceType';

type CommentCardPropsType = {
  comment: CommentType;
};

export default function CommentCard({comment}: CommentCardPropsType): JSX.Element {
  return (
  <div>CommentCard{comment.User.firstName}</div>
  );
}
