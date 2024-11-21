export const calculatePercentage = (total: number, target: number) => {
    if (total === 0) return 0; // 전체 값이 0일 경우 0% 반환
    return Math.min((target / total) * 100, 100); // 최대 100%까지 계산
  };
  