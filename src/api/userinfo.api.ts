import api from '.'; 

export type UserInfoRequest = {
  name: string;
  nickname: string;
  ageRange: string | 'NULL';
  part: string;
  language: string;
};

export const postUserInfo = async (request: UserInfoRequest, file: string): Promise<void> => {
 
  const response = await api.post('/users', {
    request, 
    file,    
  });

  return response.data;
};
