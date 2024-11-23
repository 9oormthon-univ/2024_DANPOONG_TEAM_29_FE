import { useMutation } from '@tanstack/react-query';

import { postUserInfo, UserInfoRequest } from '@/api/userinfo.api';

export const usePostUserInfo = () => {
  return useMutation({
    mutationFn: (data: { request: UserInfoRequest; file: string }) =>
      postUserInfo(data.request, data.file),
    onError: (error) => {
      alert(error?.message);
    },
    onSuccess: () => {
      alert('User information posted successfully!');
    },
  });
};
