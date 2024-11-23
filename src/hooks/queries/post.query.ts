import { useMutation } from '@tanstack/react-query';

import { postStory } from '@/api/post.api';

export const usePostStory = () => {
  return useMutation({
    mutationFn: postStory,
  });
};
