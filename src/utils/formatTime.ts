export const formatDateTime = (createdAt: string) => {
  return createdAt.replace(/-/g, '.').slice(0, -3);
};

export const formatTimeToAbsoluteOrRelative = (createdAt: string): string => {
  const now = new Date();
  const postDate = new Date(createdAt);
  const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return '방금 전';
  }
  if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes}분 전`;
  }
  if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}시간 전`;
  }
  return formatDateTime(createdAt);
};
