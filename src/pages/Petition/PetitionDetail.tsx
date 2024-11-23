import { useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import ClipBoardImg from '@/assets/clipboard.png';
import PetitionIcon from '@/assets/petition/petition.svg?react';
import { Button } from '@/components/Button';
import Spacing from '@/components/Spacing';
import { ProgressBar } from '@/pages/Petition/components/ProgressBar';
import { calculatePercentage } from '@/utils/calculatePercentage';
import { formatName } from '@/utils/formatName';
import { formatNumber } from '@/utils/formatNumber';

import { PetitionModal } from './components/PetitionModal';

const dummyData = {
  category: '노동 환경 개선',
  title: '불공정한 임금 체불 문제 해결을 위한 노동자 보호 요청',
  startDate: '2024.11.14',
  endDate: '2024.11.29',
  count: 1000,
  person: '신혁수',
  postDate: '2024.10.31 09:41',
  contents:
    '안녕하세요. 저는 한국에 온 지 1년이 된 외국인 노동자입니다. 최근 몇 달 동안 일한 임금이 제대로 지급되지 않아 정말 막막한 상황입니다. 매번 월급날이 지나고 나면 ‘이번 주에는 줄게’라는 약속만 듣고 있는데, 벌써 두 달째 기다리고 있습니다.제가 고용주에게 이야기하면, 한국어가 능숙하지 않다는 이유로 무시당하거나 번번이 핑계만 듣곤 합니다. 다른 동료들도 비슷한 상황을 겪고 있지만, 다들 생계가 걸린 문제라 함부로 나서기 어렵다고 합니다.이 글을 통해 많은 분들이 저희 같은 상황을 알게 되길 바라며, 혹시 비슷한 일을 겪으신 분들의 조언도 부탁드립니다. 한국에서 외국인 노동자들이 정당한 대우를 받을 수 있는 방법이 있다면 알려주세요',
  intend:
    '청원의 취지청원의 취지청원의 취지청원의 취지청원의 취지청원의 취지청원의 취지청원의 취지청원의 취지청원의 취지청원의 취지청원의 취지청원의 취지',
};
const totalPetition = 10000;
export const PetitionDetail = () => {
  const petitionPercent = calculatePercentage(totalPetition, dummyData.count);
  const navigate = useNavigate();

  const ref = useRef<HTMLDialogElement>(null);
  const onClose = () => {
    ref.current?.close();
  };

  const onSubmit = () => {
    console.log('data send!!!');
    navigate('/petition/complete');
  };
  return (
    <>
      <PetitionModal
        onClose={onClose}
        onSubmit={onSubmit}
        name={dummyData.person}
        title={dummyData.title}
        ref={ref}
      />
      <div className="flex flex-col">
        <Spacing size={1.75} />
        <div className="flex items-center">
          <p className="inline-block text-[10px] text-[#228CFF]">{dummyData.category}</p>
          <img src={ClipBoardImg} className="h-[13px] w-[13px]" alt="petition icon" />
        </div>
        <p className="text-xl font-bold">{dummyData.title}</p>
        <p className="inline-block text-[10px] text-[#939393]">{dummyData.postDate}</p>
        <Spacing size={3} />
        <p className="text-lg font-bold">동의기간</p>
        <p className="text-sm font-bold">
          {dummyData.startDate}~{dummyData.endDate}
        </p>
        <Spacing size={3} />
        <p className="text-lg font-bold">동의수</p>
        <div className="mb-1 flex flex-row justify-between">
          <div className="mb-1 flex flex-row">
            <PetitionIcon className="mr-[2px] h-[1.4rem] w-[1.4rem]" />
            <p className="text-sm font-bold">{formatNumber(dummyData.count)}명</p>
          </div>
          <p className="text-sm font-bold">{petitionPercent}%</p>
        </div>
        <ProgressBar percentage={petitionPercent} />
        <Spacing size={3} />
        <p className="text-lg font-bold">청원인</p>
        <p className="text-sm font-bold">{formatName(dummyData.person)}</p>
        <Spacing size={3} />
        <p className="text-lg font-bold">청원의 취지</p>
        <div className="whitespace-pre-wrap text-xs leading-5">{dummyData.intend}</div>
        <Spacing size={3} />
        <p className="text-lg font-bold">청원의 내용</p>
        <div className="min-h-[300px] w-full whitespace-pre-wrap text-xs leading-5 tracking-[-0.04em]">
          {dummyData.contents}
        </div>
        <Spacing size={7} />
        <Button buttonLabel="청원하기" onClick={() => ref.current?.showModal()} />
      </div>
    </>
  );
};
