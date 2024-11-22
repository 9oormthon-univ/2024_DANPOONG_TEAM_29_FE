import api from './index';
import { PostListOption, RecommendUserOption } from '../type/feedOption';

export const getPostList = async ({ page, sortType }: PostListOption) => {
  const { data } = await api.get(`/posts?page=${page}&size=${5}&sortType=${sortType}`);
  return data;
};

export const getRecommendUsers = async ({ page, size }: RecommendUserOption) => {
  const { data } = await api.get(`/users/recommend?size=${size}&page=${page}`);
  return data;
};
