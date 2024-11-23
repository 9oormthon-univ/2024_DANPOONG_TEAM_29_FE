import api from '.';

export const postComment = async (data: string, postId: number): Promise<void> => {
  const response = await api.post(`/comments/${postId}`, { content: data });

  return response.data;
};
