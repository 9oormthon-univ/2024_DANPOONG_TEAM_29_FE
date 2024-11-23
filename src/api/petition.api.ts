import api from './index';

export const getPetitionList = async ({
  page,
  working_condition,
}: {
  page: number;
  working_condition: string;
}) => {
  const { data } = await api.get(
    `/petitions?page=${page}&size=8&includeExpired=true&petitionType=${working_condition}&sortByAgreementCount=true`,
  );
  return data;
};

export const getPetitionDetail = async (petitionId: number) => {
  const { data } = await api.get(`/petitions/${petitionId}`);
  return data;
};
