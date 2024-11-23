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

export interface RecommendUserInfo {
  userId: number;
  nickname: string;
  profileImageUrl: string;
  part: FilterType;
}

export interface RecommendUserListResponse {
  hasNext: boolean;
  size: number;
  page: number;
  userRecommendResponseList: RecommendUserInfo[];
}
