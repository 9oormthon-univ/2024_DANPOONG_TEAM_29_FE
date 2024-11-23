import { http, HttpResponse } from 'msw';

export const userInfoHandlers = [

  http.post('http://localhost:5173/users', (req) => {
    const requestBody = req.body;
    console.log('Received data:', requestBody);
    return HttpResponse.json({
      ...requestBody,
      message: 'User info submitted successfully',
    });
  }),
];
