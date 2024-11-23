// PetitionResponseList = PetitionItemType[]
export interface PetitionItemType {
  id: number;
  title: string;
  petitionType: string;
  createdDate: string;
  agreementDeadline: string;
  agreementCount: number;
}
