import { http, HttpResponse } from 'msw';

const postListDummy = [
  {
    authorInfo: {
      authorId: 1,
      authorNickName: 'first',
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
      authorNickName: 'last',
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
];

const postDummy = {
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

const recommendUserDummy = [
  { userId: 1, nickName: 'n1', profileImageUrl: 'img', part: '건설업' },
  { userId: 2, nickName: 'n2', profileImageUrl: 'img', part: '서비스업' },
  { userId: 3, nickName: 'n3', profileImageUrl: 'img', part: '건설업' },
];

export const feedHandlers = [
  http.get('http://localhost:5173/posts', () => {
    return HttpResponse.json([postListDummy]);
  }),
  http.get('http://localhost:5173/users/recommend', () => {
    return HttpResponse.json(recommendUserDummy);
  }),
  http.get('http://localhost:5173/posts/:postId', () => {
    return HttpResponse.json(postDummy);
  }),
];
