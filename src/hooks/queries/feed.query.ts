import { useSuspenseQuery, InfiniteData, useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { getPostDetail, getPostList, getRecommendUsers } from '@/api/feed.api';
import { RecommendUserOption } from '@/types/feedOption';
import { FilterType } from '@/types/filterType';
import { PostDetailType, PostItemType } from '@/types/postType';

const POST_PER_PAGE = 5;

export const useGetPostList = (sortType: FilterType) => {
  return useSuspenseInfiniteQuery<
    PostItemType[],
    Error,
    InfiniteData<PostItemType[]>,
    string[],
    number
  >({
    queryKey: ['postList', sortType],
    queryFn: ({ pageParam }) => getPostList({ page: pageParam, sortType }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === POST_PER_PAGE ? allPages.length : undefined;
    },
    retry: false,
  });
};

export const useGetRecommendUsers = ({ size = 5, page = 0 }: RecommendUserOption) => {
  return useSuspenseQuery({
    queryKey: ['recommendUser', size, page],
    queryFn: () => getRecommendUsers({ size, page }),
  });
};

export const useGetPostDetail = (postId: number) => {
  return useSuspenseQuery<PostDetailType>({
    queryKey: ['postDetail', postId],
    queryFn: () => getPostDetail(postId),
  });
};
