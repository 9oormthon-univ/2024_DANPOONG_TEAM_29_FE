import { useSearchParams } from 'react-router-dom';

import { Filter } from './components/Filter';
import { PostItem } from './components/PostItem';
import { RecommendUser } from './components/RecommendUser';
import Spacing from '../../components/Spacing';
import { useGetPostList, useGetRecommendUsers } from '../../hooks/queries/feed.query';
import { useScrollObserve } from '../../hooks/useScrollObserve';
import { FilterType } from '../../type/filterType';
import { PostItemType } from '../../type/postType';

export const Feed = () => {
  const [searchParams] = useSearchParams();
  const currentSortType = (searchParams.get('sortType') || 'CREATED_AT_DESC') as FilterType;

  const { data: postList, isPending, fetchNextPage, hasNextPage } = useGetPostList(currentSortType);
  const { data: recommendUsers } = useGetRecommendUsers({});

  const { lastElementRef } = useScrollObserve<PostItemType[]>({
    isPending,
    fetchNextPage,
    hasNextPage,
  });

  return (
    <div>
      <Filter />
      {postList.pages.flatMap((page) =>
        page.map((post) => <PostItem key={post.postId} {...post} />),
      )}
      <div ref={lastElementRef} />
      <Spacing size={1.25} />
      <RecommendUser userList={recommendUsers} />
    </div>
  );
};
