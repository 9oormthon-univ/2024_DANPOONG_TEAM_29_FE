import { FilterType, SortType } from './filterType';

export interface PostListOption {
  page?: number;
  sortType: SortType;
  part: FilterType | '';
}

export interface RecommendUserOption {
  page?: number;
  size?: number;
}
