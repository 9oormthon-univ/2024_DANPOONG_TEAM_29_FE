import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import ToggleButtonIcon from '@/assets/toggle.svg?react';
import { PetitionItem } from '@/components/petition/PetitionItem';
import Spacing from '@/components/Spacing';
const dummyData = [
  {
    petitionId: 'sfsf',
    category: '노동 환경 개선',
    title: '불공정한 임금 체불 문제 해결을 위한 노동자 보호 요청',
    startDate: '2024.11.14',
    endDate: '2024.11.29',
    count: 1000,
  },
  {
    petitionId: 'sfsf',
    category: '노동 환경 개선',
    title: '불공정한 임금 체불 문제 해결을 위한 노동자 보호 요청',
    startDate: '2024.11.14',
    endDate: '2024.11.29',
    count: 1000,
  },
  {
    petitionId: 'sfsf',
    category: '노동 환경 개선',
    title: '불공정한 임금 체불 문제 해결을 위한 노동자 보호 요청',
    startDate: '2024.11.14',
    endDate: '2024.11.29',
    count: 1000,
  },
  {
    petitionId: 'sfsf',
    category: '노동 환경 개선',
    title: '불공정한 임금 체불 문제 해결을 위한 노동자 보호 요청',
    startDate: '2024.11.14',
    endDate: '2024.11.29',
    count: 1000,
  },
  {
    petitionId: 'sfsf',
    category: '노동 환경 개선',
    title: '불공정한 임금 체불 문제 해결을 위한 노동자 보호 요청',
    startDate: '2024.11.14',
    endDate: '2024.11.29',
    count: 1000,
  },
  {
    petitionId: 'sfsf',
    category: '노동 환경 개선',
    title: '불공정한 임금 체불 문제 해결을 위한 노동자 보호 요청',
    startDate: '2024.11.14',
    endDate: '2024.11.29',
    count: 1000,
  },
];
export const PetitionFeed = () => {
  //  TODO: 리액트 쿼리로 바꿀예정
  const [petitionList] = useState(dummyData);
  const navigate = useNavigate();
  const clickPage = (petitionId: string) => {
    navigate(`/petition/${petitionId}`);
  };
  return (
    <div className="flex-col">
      <Spacing size={1.4}></Spacing>
      <div className="flex w-full flex-row-reverse">
        <div className="flex h-[1rem] w-[1rem] items-center">
          <ToggleButtonIcon className="h-[0.5rem] w-[0.7rem]" />
        </div>
        <span className="text-center text-xs font-extrabold">최신순</span>
      </div>
      <Spacing size={2}></Spacing>
      <div className="max-h-4xl grid h-[600px] grid-cols-2 gap-4 overflow-auto">
        {petitionList.map((item) => (
          <PetitionItem {...item} key={item.category} onClick={() => clickPage(item.petitionId)} />
        ))}
      </div>
    </div>
  );
};
