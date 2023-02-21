import { Box, Button, TextField, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  addComment,
  addOneComment,
  setAllComments,
} from '../../../redux/commentsSlice/commentsSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import CommentCard from '../CommentCard/CommentCard';

export default function CommentsSection(): JSX.Element {
  const { id } = useParams();
  const commetns = useAppSelector((store) => store.comments);
  const user = useAppSelector((store) => store.user);
  // let userId;
  // if (user.status === 'logged') {
  //   userId = user.id
  // }
  const [inputData, setInputData] = useState({
    body: '',
    authorid: user.status === 'logged' ? user.id : null,
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setAllComments(id));
  }, []);
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addOneComment(id, inputData));
    console.log(id, inputData);
  };
  return (
    <>
      <Box onSubmit={(e) => submitHandler(e)} component="form">
        <TextField type='text' onChange={inputChangeHandler} value={inputData.body} name="body" />
        <Button type="submit" >Отправить отзыв</Button>
      </Box>
      {commetns.comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </>
  );
}
