import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import LikeDescIcon from '@/assets/feed/filter_like.svg?react';
import CreatedAtDescIcon from '@/assets/feed/filter_time.svg?react';
import Spacing from '@/components/Spacing';
import { useGetPostList, useGetRecommendUsers } from '@/hooks/queries/feed.query';
import { useScrollObserve } from '@/hooks/useScrollObserve';
import { FilterType, SortType } from '@/types/filterType';
import { PostItemType } from '@/types/postType';

import { EmptyFeed } from './components/EmptyFeed';
import { Filter } from './components/Filter';
import { PostItem } from './components/PostItem';
import { RecommendUser } from './components/RecommendUser';

export const Feed = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentSortType = (searchParams.get('sortType') || 'CREATED_AT_DESC') as SortType;
  const currentPartType = (searchParams.get('part') || '') as FilterType;

  const {
    data: postList,
    isPending,
    fetchNextPage,
    hasNextPage,
  } = useGetPostList({
    currentSortType,
    currentPartType,
  });
  const { data: recommendUsers } = useGetRecommendUsers({});

  const allPostCount = (postList ? postList.pages.flat() : []).length;

  const { lastElementRef } = useScrollObserve<PostItemType[]>({
    isPending,
    fetchNextPage,
    hasNextPage,
  });

  useEffect(() => {
    if (!searchParams.get('sortType')) {
      setSearchParams({ sortType: 'CREATED_AT_DESC' });
    }
  }, [searchParams, setSearchParams]);

  return (
    <div>
      <div className="flex items-center justify-end">
        {isFilterVisible == false && (
          <div className="ml-2 flex gap-2">
            <CreatedAtDescIcon
              className={currentSortType === 'CREATED_AT_DESC' ? 'text-primary' : 'text-[#979797]'}
              onClick={() => setSearchParams({ sortType: 'CREATED_AT_DESC' })}
            />
            <LikeDescIcon
              className={currentSortType === 'LIKE_DESC' ? 'text-primary' : 'text-[#979797]'}
              onClick={() => setSearchParams({ sortType: 'LIKE_DESC' })}
            />
          </div>
        )}
        <Filter isFilterVisible={isFilterVisible} setIsFilterVisible={setIsFilterVisible} />
      </div>
      {allPostCount === 0 ? (
        <EmptyFeed filterType={currentPartType} />
      ) : (
        <div>
          {postList.pages.flatMap((page) =>
            page.map((post) => <PostItem key={post.postId} {...post} />),
          )}
          <div ref={lastElementRef} />
        </div>
      )}
      <Spacing size={1.25} />
      <RecommendUser userList={recommendUsers} />
    </div>
  );
};
