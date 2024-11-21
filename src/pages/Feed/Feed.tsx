import { Filter } from './components/Filter';
import { PostItem } from './components/PostItem';
import { RecommendUser } from './components/RecommendUser';
import Spacing from '../../components/Spacing';

// TODO: 서버 연결
const postDummy = [
  {
    authorInfo: {
      authorId: 1,
      authorNickName: 'admin',
      authorProfileImageUrl: 'img',
    },
    createdAt: '2024-11-21 15:46:57',
    postId: 1,
    title: '제목1',
    content:
      '안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 ',
    likeCount: 1,
    isLike: true,
    tags: ['ANGRY', 'HAPPY'],
    postImageUrl: 'img',
  },
  {
    authorInfo: {
      authorId: 2,
      authorNickName: 'user',
      authorProfileImageUrl: 'img',
    },
    createdAt: '2024-11-21 15:46:57',
    postId: 2,
    title: '제목2',
    content: '내용2',
    likeCount: 0,
    isLike: false,
    tags: [],
    postImageUrl: '',
  },
  {
    authorInfo: {
      authorId: 3,
      authorNickName: 'user2',
      authorProfileImageUrl: 'img',
    },
    createdAt: '2024-11-21 15:46:57',
    postId: 3,
    title: '제목3',
    content: '내용3',
    likeCount: 0,
    isLike: false,
    tags: [],
    postImageUrl: '',
  },
  {
    authorInfo: {
      authorId: 3,
      authorNickName: 'user2',
      authorProfileImageUrl: 'img',
    },
    createdAt: '2024-11-21 15:46:57',
    postId: 4,
    title: '제목4',
    content: '내용4',
    likeCount: 0,
    isLike: false,
    tags: [],
    postImageUrl: '',
  },
  {
    authorInfo: {
      authorId: 1,
      authorNickName: 'admin',
      authorProfileImageUrl: 'img',
    },
    createdAt: '2024-11-21 15:46:57',
    postId: 11,
    title: '제목1',
    content:
      '안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 ',
    likeCount: 1,
    isLike: true,
    tags: ['ANGRY', 'HAPPY'],
    postImageUrl: 'img',
  },
  {
    authorInfo: {
      authorId: 1,
      authorNickName: 'admin',
      authorProfileImageUrl: 'img',
    },
    createdAt: '2024-11-21 15:46:57',
    postId: 21,
    title: '제목1',
    content:
      '안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 ',
    likeCount: 1,
    isLike: true,
    tags: ['ANGRY', 'HAPPY'],
    postImageUrl: 'img',
  },
  {
    authorInfo: {
      authorId: 1,
      authorNickName: 'admin',
      authorProfileImageUrl: 'img',
    },
    createdAt: '2024-11-21 15:46:57',
    postId: 31,
    title: '제목1',
    content:
      '안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 ',
    likeCount: 1,
    isLike: true,
    tags: ['ANGRY', 'HAPPY'],
    postImageUrl: 'img',
  },
  {
    authorInfo: {
      authorId: 1,
      authorNickName: 'admin',
      authorProfileImageUrl: 'img',
    },
    createdAt: '2024-11-21 15:46:57',
    postId: 41,
    title: '제목1',
    content:
      '안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 ',
    likeCount: 1,
    isLike: true,
    tags: ['ANGRY', 'HAPPY'],
    postImageUrl: 'img',
  },
  {
    authorInfo: {
      authorId: 1,
      authorNickName: 'admin',
      authorProfileImageUrl: 'img',
    },
    createdAt: '2024-11-21 15:46:57',
    postId: 51,
    title: '제목1',
    content:
      '안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속 ',
    likeCount: 1,
    isLike: true,
    tags: ['ANGRY', 'HAPPY'],
    postImageUrl: 'img',
  },
];

const recommendUserDummy = [
  { userId: 1, nickName: 'n1', profileImageUrl: 'img', part: '건설업' },
  { userId: 2, nickName: 'n2', profileImageUrl: 'img', part: '서비스업' },
  { userId: 3, nickName: 'n3', profileImageUrl: 'img', part: '건설업' },
];

export const Feed = () => {
  return (
    <div>
      <Filter />
      {postDummy.map(
        ({
          authorInfo,
          createdAt,
          postId,
          title,
          content,
          likeCount,
          isLike,
          tags,
          postImageUrl,
        }) => (
          <PostItem
            key={postId}
            authorInfo={authorInfo}
            createdAt={createdAt}
            postId={postId}
            title={title}
            content={content}
            likeCount={likeCount}
            isLike={isLike}
            tags={tags}
            postImageUrl={postImageUrl}
          />
        ),
      )}
      <Spacing size={1.25} />
      <RecommendUser userList={recommendUserDummy} />
    </div>
  );
};
