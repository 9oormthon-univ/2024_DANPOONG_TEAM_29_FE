// PetitionResponseList = PetitionItemType[]

export type PetitionCategoryType =
  | 'MANUFACTURING'
  | 'CONSTRUCTION'
  | 'LOGISTICS*'
  | 'SERVICE'
  | 'AGRICULTURE'
  | 'FISHERIES'
  | 'HOUSECARE'
  | 'PROFESSIONAL'
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
