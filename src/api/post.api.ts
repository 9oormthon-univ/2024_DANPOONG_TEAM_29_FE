import api from './index';

export const postStory = async (post: globalThis.FormData) => {
  const { data } = await api.post('/posts', post, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export const postLike = async (postId: number): Promise<void> => {
  const response = await api.get(`/posts/like/${postId}`);
  return response.data;
};
