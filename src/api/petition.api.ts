import { PetitionDetailType, PetitionListResponse, PetitionPostType } from '@/types/petitionType';

import api from './index';

export const getPetitionList = async ({
  page,
  working_condition,
}: {
  page: number;
  working_condition: string;
}): Promise<PetitionListResponse> => {
  const { data } = await api.get(
    `/petitions?page=${page}&size=8&includeExpired=true&petitionType=${working_condition}&sortByAgreementCount=true`,
  );
  return data;
};

export const postPetition = async (data: PetitionPostType): Promise<void> => {
  const response = await api.post('/petitions', {
    data,
  });

  return response.data;
};

export const getPetitionDetail = async (petitionId: number): Promise<PetitionDetailType> => {
  const { data } = await api.get(`/petitions/${petitionId}`);
  return data;
};
