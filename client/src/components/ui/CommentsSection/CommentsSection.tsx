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
  const [dynamicComentsState, setDynamicComentsState] = useState(false);
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
  }, [dynamicComentsState]);
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addOneComment(id, inputData));
    setDynamicComentsState((prev) => !prev);
    // console.log(id, inputData);
  };
  return (
    <>
      <Box onSubmit={(e) => submitHandler(e)} component="form" style={{display: 'flex', flexDirection: 'row', borderTopRightRadius: '10px', borderBottomRightRadius: '10px'}}>
        <TextField
          style={{ background: '#fafafa', width: '24rem', height: '3rem' }}
          sx={{ borderTopLeftRadius: 10, borderBotomLeftRadius: 10 }}
          type="text"
          onChange={inputChangeHandler}
          value={inputData.body}
          name="body"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
        />
        <Button style={{backgroundColor: '#f9bf3b', height: '3rem', borderRadius: '10px'}} variant="contained" type="submit">Отправить отзыв</Button>
      </Box>
      {commetns.comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </>
  );
}
