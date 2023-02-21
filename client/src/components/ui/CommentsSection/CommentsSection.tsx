import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addComment, setAllComments } from '../../../redux/commentsSlice/commentsSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import CommentCard from '../CommentCard/CommentCard';

export default function CommentsSection(): JSX.Element {
  const { id } = useParams();
  const commetns = useAppSelector((store) => store.comments);
  const dispatch = useAppDispatch();
  const [inputData, setInputData] = useState({body: ''});
  useEffect(() => {
    dispatch(setAllComments(id));
  }, []);
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputData((prev) => ({...prev, [e.target.name]: e.target.value}))
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addComment({...inputData, authorid: id, }))
  }
  return (
    <>
      <form>
        <input onChange={inputChangeHandler} value={inputData.body} name="body" />
      </form>
      {commetns.comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </>
  );
}
