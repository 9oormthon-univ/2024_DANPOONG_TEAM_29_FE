import { PostListOption, RecommendUserOption } from '@/types/feedOption';

import api from './index';

export const getPostList = async ({ page, sortType, part }: PostListOption) => {
  const { data } = await api.get(
    `/posts?page=${page}&size=${5}&sortType=${sortType}${part !== '' ? `&part=${part}` : ''}`,
  );
  return data;
};

export const getRecommendUsers = async ({ page, size }: RecommendUserOption) => {
  const { data } = await api.get(`/users/recommend?size=${size}&page=${page}`);
  return data;
};

export const getPostDetail = async (postId: number) => {
  const { data } = await api.get(`/posts/${postId}`);
  return data;
};
