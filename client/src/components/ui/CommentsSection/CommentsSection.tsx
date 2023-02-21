import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { setAllComments } from '../../../redux/commentsSlice/commentsSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import CommentCard from '../CommentCard/CommentCard';

export default function CommentsSection(): JSX.Element {
    const {id} = useParams()
    const commetns = useAppSelector((store) => store.comments)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setAllComments(id))
    },[])
  return (
    <>   
     {commetns.comments.map((comment) => <CommentCard comment={comment} />)}
    </>

  )
}
