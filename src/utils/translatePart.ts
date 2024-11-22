import { FilterType } from '@/types/filterType';

type Part = Exclude<FilterType, 'LIKE_DESC' | 'CREATED_AT_DESC'>;
type PartKorean =
  | '제조업'
  | '건설업'
  | '운전 및 운송'
  | '서비스업'
  | '농업 및 축산업'
  | '어업'
  | '가사 및 돌봄'
  | '전문직';

const partRecord: Record<Part | PartKorean, Part | PartKorean> = {
  MANUFACTURING: '제조업',
  CONSTRUCTION: '건설업',
  LOGISTICS: '운전 및 운송',
  SERVICE: '서비스업',
  AGRICULTURE: '농업 및 축산업',
  FISHERIES: '어업',
  HOUSECARE: '가사 및 돌봄',
  PROFESSIONAL: '전문직',
  제조업: 'MANUFACTURING',
  건설업: 'CONSTRUCTION',
  '운전 및 운송': 'LOGISTICS',
  서비스업: 'SERVICE',
  '농업 및 축산업': 'AGRICULTURE',
  어업: 'FISHERIES',
  '가사 및 돌봄': 'HOUSECARE',
  전문직: 'PROFESSIONAL',
};

export const translatePart = (term: Part | PartKorean): Part | PartKorean | 'Term not found' => {
  return partRecord[term] || 'Term not found';
};
