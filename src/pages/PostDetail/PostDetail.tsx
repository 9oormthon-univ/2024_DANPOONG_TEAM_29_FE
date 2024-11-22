import { useNavigate, useParams } from 'react-router-dom';

import CommentIcon from '@/assets/comment.svg?react';
import EmptyLike from '@/assets/emptyLike.svg';
import FillLike from '@/assets/fillLike.svg?react';
import FollowIcon from '@/assets/follow.svg?react';
import SendCommentIcon from '@/assets/sendComment.svg?react';
import Spacing from '@/components/Spacing';
import { TagItem } from '@/components/tag/TagItem';
import { TopBarControl } from '@/components/TopBarControl';
import { useGetPostDetail } from '@/hooks/queries/feed.query';
import { formatDateTime } from '@/utils/formatTime';

import { CommentItem } from './components/CommentItem';

interface PostDetail {
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

export const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  if (isNaN(Number(postId))) navigate('/feed');

  const { data } = useGetPostDetail(Number(postId));
  const { authorInfo, createdAt, title, content, likeCount, isLike, tags, postImageUrl } =
    data.postResponse;

  return (
    <>
      <TopBarControl size={1} />
      <Spacing size={1} />
      <div className="w-full">
        <div className="mb-2 flex justify-between">
          <div className="flex gap-2">
            {tags.map((tag) => (
              <TagItem key={tag} tagLabel={tag} />
            ))}
          </div>
          <div className="flex items-center gap-1">
            <p className="text-xs">{likeCount}</p>
            {isLike ? <FillLike /> : <EmptyLike />}
          </div>
        </div>
        <p className="text-lg font-medium leading-7">{title}</p>
        <p className="text-xs font-normal leading-5 text-[#939393]">{formatDateTime(createdAt)}</p>
        <Spacing size={1} />
        <p className="mb-[10px] whitespace-pre-line text-xs font-normal leading-5">{content}</p>
        {postImageUrl && (
          <img
            src={postImageUrl}
            className="mb-4 h-[200px] w-full rounded-[10px]"
            alt="post image"
          />
        )}
        <div className="flex h-10 items-center">
          <img
            src={authorInfo.authorProfileImageUrl}
            className="h-10 w-10 rounded-full"
            alt="author image"
          />
          <Spacing size={0.6} direction="horizontal" />
          <p className="grow text-xs">{authorInfo.authorNickName}</p>
          <FollowIcon className="h-7" />
        </div>
        <hr className="my-4 border border-[#54BBFF]" />
        <p className="text-lg leading-7">댓글</p>
        <div className="mb-7 mt-4 flex items-center gap-3">
          <CommentIcon />
          <input
            placeholder={`${authorInfo.authorNickName}님의 글에 댓글 달기`}
            className="grow rounded-[10px] border border-light-gray px-3 py-2 text-xs focus:border-[#228CFF] focus:outline-none"
          />
          {/* TODO: 댓글 추가 API 연결 */}
          <SendCommentIcon />
        </div>
        <div className="flex flex-col gap-7">
          {data.commentResponseList.map(
            ({ profileImageUrl, nickname, commentId, content, createdAt }) => (
              <CommentItem
                key={commentId}
                profileImageUrl={profileImageUrl}
                nickname={nickname}
                content={content}
                createdAt={createdAt}
              />
            ),
          )}
        </div>
      </div>
    </>
  );
};
