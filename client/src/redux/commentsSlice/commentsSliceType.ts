import type { BackendUserType } from '../userSlice/userType';

export type CommentType = {
  id: number;
  body: string;
  authorid: number;
  userid: number;
  User: BackendUserType;
};

export type CommentSliceType = {
  comments: CommentType[];
};

export type CommentFormType = {
  body: string;
  authorid: number;
};
