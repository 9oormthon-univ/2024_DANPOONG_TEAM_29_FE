import { UserInfoType } from '@/types/userInfoType';

import api from '.';

export const postUserInfo = async (request: UserInfoType, file: string): Promise<void> => {
  const response = await api.post('/users', {
    request,
    file,
  });

  return response.data;
};
