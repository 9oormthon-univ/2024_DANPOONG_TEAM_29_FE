import { useSuspenseQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getPostDetail, getPostList, getRecommendUsers } from '@/api/feed.api';
import { RecommendUserOption } from '@/types/feedOption';
import { FilterType, SortType } from '@/types/filterType';
import { PostDetailType } from '@/types/postType';

export const useGetPostList = ({
  currentSortType,
  currentPartType,
}: {
  currentSortType: SortType;
  currentPartType: FilterType;
}) => {
  return useSuspenseInfiniteQuery({
    queryKey: ['postList', currentSortType, currentPartType],
    queryFn: ({ pageParam }) =>
      getPostList({ page: pageParam, sortType: currentSortType, part: currentPartType }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasNext == true ? allPages.length : undefined;
    },
    select: (data) => ({
      pages: data.pages.map((page) => page.postResponseList),
      pageParams: data.pageParams,
    }),
    retry: false,
  });
};

export const useGetRecommendUsers = ({ size = 5, page = 0 }: RecommendUserOption) => {
  return useSuspenseQuery({
    queryKey: ['recommendUser', size, page],
    queryFn: () => getRecommendUsers({ size, page }),
    select: (data) => data.userRecommendResponseList,
  });
};

export const useGetPostDetail = (postId: number) => {
  return useSuspenseQuery<PostDetailType>({
    queryKey: ['postDetail', postId],
    queryFn: () => getPostDetail(postId),
  });
};
