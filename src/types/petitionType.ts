export type PetitionCategoryType =
  | 'WORKING_CONDITIONS'
  | 'WAGES_AND_BENEFITS'
  | 'HOUSING_ISSUES'
  | 'LEGAL_PROTECTION'
  | 'HEALTHCARE'
  | 'EDUCATION_AND_ADAPTATION'
  | 'DISCRIMINATION_PREVENTION'
  | 'SOCIAL_RIGHTS_IMPROVEMENT'
  | '';

export interface PetitionPostType {
  title: string;
  purpose: string;
  content: string;
  petitionType: string;
}

export interface PetitionListResponse {
  sortByAgreementCount: boolean;
  size: number;
  includeExpired: boolean;
  hasNext: boolean;
  petitionType: string | null;
  page: number;
  PetitionResponseList: PetitionItemType[];
}

export interface PetitionItemType {
  id: number;
  title: string;
  petitionType: PetitionCategoryType;
  createdDate: string;
  agreementDeadline: string;
  agreementCount: number;
}

export interface PetitionDetailType extends PetitionItemType {
  purpose: string;
  isAgreement: boolean;
  name: string;
  isMyPetition: boolean;
  content: string;
}
