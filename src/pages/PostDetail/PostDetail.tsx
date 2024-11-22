import { useParams } from 'react-router-dom';

import { CommentItem } from './components/CommentItem';
import CommentIcon from '../../assets/comment.svg?react';
import EmptyLike from '../../assets/emptyLike.svg';
import FillLike from '../../assets/fillLike.svg?react';
import FollowIcon from '../../assets/follow.svg?react';
import Spacing from '../../components/Spacing';
import { TagItem } from '../../components/tag/TagItem';

const PostDummy = {
  hasNext: false,
  size: 5,
  postResponse: {
    authorInfo: {
      authorId: 1,
      authorNickName: 'admin',
      authorProfileImageUrl: 'img',
    },
    createdAt: '2024-11-21 19:43:07',
    postId: 1,
    title: '제목1',
    content: `안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속만 듣고 있는데, 벌써 두 달째 기다리고 있습니다.

    제가 고용주에게 이야기하면, 한국어가 능숙하지 않다는 이유로 무시당하거나 번번이 핑계만 듣곤 합니다. 다른 동료들도 비슷한 상황을 겪고 있지만, 다들 생계가 걸린 문제라 함부로 나서기 어렵다고 합니다.

    이 글을 통해 많은 분들이 저희 같은 상황을 알게 되길 바라며, 혹시 비슷한 일을 겪으신 분들의 조언도 부탁드립니다. 한국에서 외국인 노동자들이 정당한 대우를 받을 수 있는 방법이 있다면 알려주세요!`,
    likeCount: 1,
    isLike: true,
    tags: ['ANGRY', 'HAPPY'],
    postImageUrl: 'img',
  },
  commentResponseList: [
    {
      userId: 3,
      profileImageUrl: 'img',
      nickname: 'user2',
      commentId: 4,
      content: '댓글4',
      createdAt: '2024-11-21 19:43:07',
    },
    {
      userId: 3,
      profileImageUrl: 'img',
      nickname: 'user2',
      commentId: 3,
      content: '댓글3',
      createdAt: '2024-11-21 19:43:07',
    },
    {
      userId: 2,
      profileImageUrl: 'img',
      nickname: 'user',
      commentId: 2,
      content: '댓글2',
      createdAt: '2024-11-21 19:43:07',
    },
    {
      userId: 1,
      profileImageUrl: 'img',
      nickname: 'admin',
      commentId: 1,
      content: '댓글1',
      createdAt: '2024-11-21 19:43:07',
    },
  ],
};

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
  // TODO: postId 사용해서 서버 연결
  const { postId } = useParams();

  const { authorInfo, createdAt, title, content, likeCount, isLike, tags, postImageUrl } =
    PostDummy.postResponse;

  return (
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
      <p className="text-xs font-normal leading-5 text-[#939393]">{createdAt}</p>
      <Spacing size={1} />
      <p className="mb-[10px] whitespace-pre-line text-xs font-normal leading-5">{content}</p>
      {postImageUrl && (
        <img src={postImageUrl} className="mb-4 h-[200px] w-full rounded-[10px]" alt="post image" />
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
      <div className="mb-7 mt-4 flex gap-3">
        <CommentIcon />
        <input
          placeholder={`${authorInfo.authorNickName}님의 글에 댓글 달기`}
          className="grow text-xs"
        />
      </div>
      <div className="flex flex-col gap-7">
        {PostDummy.commentResponseList.map(
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
  );
};
