export type CommentType = {
    id: number;
    body: string;
    authorid: number;
    userid: number;
}

export type CommentSliceType = {
    comments: CommentType[]
}

export type CommentFormType = {
    body: string;
    authorid: number;
}