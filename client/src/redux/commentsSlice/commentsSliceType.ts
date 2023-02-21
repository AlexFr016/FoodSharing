import type { BackendUserType } from '../userSlice/userType';

// export type CommentedUserType = {


// }

export type CommentType = {
  id: string;
  body: string;
  authorid: number;
  userid: number;
};

export type CommentSliceType = {
  comments: CommentType[];
};

export type CommentFormType = {
  body: string;
  authorid: number;
};
