import { http, HttpResponse } from 'msw';

const petitionListDummy = [
  {
    id: 8,
    title: '모킹용 청원 제목입니다 으아아아아아아아아악',
    petitionType: '노동 환경 개선',
    createdDate: '2024-11-23',
    agreementDeadline: '2025-01-18',
    agreementCount: 999,
  },
  {
    id: 8,
    title: '모킹용 청원 제목입니다 으아아아아아아아아악',
    petitionType: '노동 환경 개선',
    createdDate: '2024-11-23',
    agreementDeadline: '2025-01-18',
    agreementCount: 1000,
  },
  {
    id: 8,
    title: '모킹용 청원 제목입니다 으아아아아아아아아악',
    petitionType: '노동 환경 개선',
    createdDate: '2024-11-23',
    agreementDeadline: '2025-01-18',
    agreementCount: 1000,
  },
  {
    id: 8,
    title: '모킹용 청원 제목입니다 으아아아아아아아아악',
    petitionType: '노동 환경 개선',
    createdDate: '2024-11-23',
    agreementDeadline: '2025-01-18',
    agreementCount: 1000,
  },
  {
    id: 8,
    title: '모킹용 청원 제목입니다 으아아아아아아아아악',
    petitionType: '노동 환경 개선',
    createdDate: '2024-11-23',
    agreementDeadline: '2025-01-18',
    agreementCount: 1000,
  },
  {
    id: 8,
    title: '모킹용 청원 제목입니다 으아아아아아아아아악',
    petitionType: '노동 환경 개선',
    createdDate: '2024-11-23',
    agreementDeadline: '2025-01-18',
    agreementCount: 1000,
  },
  {
    id: 8,
    title: '모킹용 청원 제목입니다 으아아아아아아아아악',
    petitionType: '노동 환경 개선',
    createdDate: '2024-11-23',
    agreementDeadline: '2025-01-18',
    agreementCount: 1000,
  },
  {
    id: 8,
    title: '모킹용 청원 제목입니다 으아아아아아아아아악',
    petitionType: '노동 환경 개선',
    createdDate: '2024-11-23',
    agreementDeadline: '2025-01-18',
    agreementCount: 1000,
  },
];

const petitionDummy = {
  agreementDeadline: '2025-01-18',
  purpose:
    '청원의 취지 청원의 취지 청원의 취지 청원의 취지 청원의 취지 청원의 취지 청원의 취지 청원의 취지 청원의 취지 청원의 취지 청원의 취지 청원의 취지 청원의 취지 청원의 취지 청원의 취지 청원의 취지 청원의 취지 청원의 취지 청원의 취지 청원의 취지 청원의 취지 ',
  isAgreement: false,
  name: '모킹 유저',
  isMyPetition: false,
  petitionType: '工作條件',
  agreementCount: 167,
  title: '모킹 청원',
  content: '모킹 청원입니다~~~ 서버 데이터 아님~~~',
  createdDate: '2024-11-23',
};

export const petitionHandlers = [
  http.get('http://localhost:5173/petitions', () => {
    return HttpResponse.json(petitionListDummy);
  }),
  http.get('http://localhost:5173/petitions/:petitionId', () => {
    return HttpResponse.json(petitionDummy);
  }),
];
