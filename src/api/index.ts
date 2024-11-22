import axios from 'axios';

const api = axios.create({
  // TODO: 서버 API 주소로 환경변수 수정
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  // TODO: 로그인 이후 저장된 토큰 가져오기
  const token = '';
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});

export default api;
