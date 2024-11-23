import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';

import { postLike } from '@/api/post.api';
import { PostItemProps } from '@/pages/Feed/components/PostItem';

export const useGetPostLike = (postId: number) => {
  return useSuspenseQuery({
    queryKey: ['postLike', postId],
    queryFn: () => postLike(postId),
  });
};

export const usePostLike = (postId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => postLike(postId),
    onMutate: async (now: boolean) => {
      const oldData = queryClient.getQueryData(['post', postId]);

      queryClient.setQueryData(['post', postId], (oldData: PostItemProps) => {
        console.log('!!');
        return {
          ...oldData,
          likeCount: now ? oldData.likeCount - 1 : oldData.likeCount + 1,
        };
      });
      return { oldData };
    },
    onError: (err, _, context) => {
      console.error('Error liking post:', err.message);
      queryClient.setQueryData(['post', postId], context!.oldData);
    },

    onSettled() {
      queryClient.invalidateQueries({ queryKey: ['post', postId] });
    },
  });
};
