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
  type: keyof UserInfoType;
  value: string;
}

export const AgeRange = {
  10: '10대',
  20: '20대',
  30: '30대',
  40: '40대',
  50: '50대',
  60: '60대',
};

export type UserInfoType = {
  name: string;
  nickname: string;
  ageRange: string | 'NULL';
  part: string;
  language: string;
};

export type AgeType = (typeof AgeRange)[keyof typeof AgeRange];
