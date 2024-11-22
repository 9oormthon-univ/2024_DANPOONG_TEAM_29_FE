export interface PostItemType {
  authorInfo: {
    authorId: number;
    authorNickName: string;
    authorProfileImageUrl: string;
  };
  createdAt: string;
  postId: number;
  title: string;
  content: string;
  likeCount: number;
  isLike: boolean;
  tags: string[];
  postImageUrl: string;
}

interface CommentItemType {
  userId: number;
  profileImageUrl: string;
  nickname: string;
  commentId: number;
  content: string;
  createdAt: string;
}

export interface PostDetailType {
  postResponse: PostItemType;
  commentResponseList: CommentItemType[];
}
