// PetitionResponseList = PetitionItemType[]
export interface PetitionItemType {
  id: number;
  title: string;
  petitionType: string;
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
