import { useMutation } from '@tanstack/react-query';

import { postUserInfo } from '@/api/userinfo.api';
import { UserInfoType } from '@/types/userInfoType';
export const usePostUserInfo = () => {
  return useMutation({
    mutationFn: (data: { request: UserInfoType; file: string }) =>
      postUserInfo(data.request, data.file),
    onError: (error) => {
      alert(error?.message);
    },
    onSuccess: () => {
      alert('User information posted successfully!');
    },
  });
};
