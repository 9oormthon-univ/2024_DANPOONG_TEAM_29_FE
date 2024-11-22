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
