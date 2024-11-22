import { FilterType } from './filterType';

export interface PostListOption {
  page?: number;
  sortType: FilterType;
}

export interface RecommendUserOption {
  page?: number;
  size?: number;
}
