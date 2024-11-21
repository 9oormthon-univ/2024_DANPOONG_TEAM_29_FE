export type UserInfoType = 'nickName' | 'age' | 'career' | 'name' | 'language';

export const JobLabels = [
  '제조업',
  '건설업',
  '운전 및 운송',
  '서비스업',
  '농업 및 축산업',
  '어업',
  '가사 및 돌봄',
  '전문직',
] as const;

export const SUPPORTED_LANGUAGES = [
  '한국어',
  '중국어',
  '베트남어',
  '따갈로그어(필리핀)',
  '태국어',
  '인도네시아어',
  '싱할라어(스리라카)',
] as const;

export interface UserItem {
  type: UserInfoType;
  value: string;
}
