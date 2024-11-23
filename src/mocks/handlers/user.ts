import { http, HttpResponse } from 'msw';

export const userInfoHandlers = [
  // POST 요청을 처리하는 핸들러 추가
  http.post('http://localhost:5173/users', (req) => {
    const requestBody = req.body;
    console.log('Received data:', requestBody);
    return HttpResponse.json({
      ...requestBody,
      message: 'User info submitted successfully',
    });
  }),
];
