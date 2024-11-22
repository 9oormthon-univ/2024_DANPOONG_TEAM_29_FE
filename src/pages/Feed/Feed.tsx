import { useEffect, useState } from 'react';

import { Filter } from './components/Filter';
import { PostItem } from './components/PostItem';
import { RecommendUser } from './components/RecommendUser';
import Spacing from '../../components/Spacing';

export const Feed = () => {
  // TODO: 서버 스키마와 동일한 타입 생성
  const [recommendUsers, setRecommendUsers] = useState<any[]>([]);
  const [postList, setPostList] = useState<any[]>([]);

  useEffect(() => {
    // TODO: api 함수로 분리
    const fetchPostList = async () => {
      const response = await fetch('http://localhost:5173/posts');
      const data = await response.json();
      setPostList(data);
    };
    const fetchRecommendUsers = async () => {
      const response = await fetch('http://localhost:5173/users/recommend');
      const data = await response.json();
      setRecommendUsers(data);
    };

    fetchPostList();
    fetchRecommendUsers();
  }, []);

  return (
    <div>
      <Filter />
      {postList.map((post) => (
        <PostItem key={post.postId} {...post} />
      ))}
      <Spacing size={1.25} />
      <RecommendUser userList={recommendUsers} />
    </div>
  );
};
