import { useMutation } from '@tanstack/react-query';

import { postComment } from '@/api/comment';

export const useComment = (postId: number) => {
  return useMutation({
    mutationFn: (data: string) => postComment(data, postId),
    onError: (error) => {
      alert(error?.message);
    },
    onSuccess: () => {
      console.log('User information posted successfully!');
    },
  });
};
