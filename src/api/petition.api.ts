import api from './index';

export const getPetitionDetail = async (petitionId: number) => {
  const { data } = await api.get(`/petition/${petitionId}`);
  return data;
};
