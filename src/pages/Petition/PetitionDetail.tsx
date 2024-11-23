import { useRef } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import ClipBoardImg from '@/assets/clipboard.png';
import PetitionIcon from '@/assets/petition/petition.svg?react';
import { Button } from '@/components/Button';
import Spacing from '@/components/Spacing';
import { useGetPetitionDetail } from '@/hooks/queries/petition.query';
import { ProgressBar } from '@/pages/Petition/components/ProgressBar';
import { calculatePercentage } from '@/utils/calculatePercentage';
import { formatName } from '@/utils/formatName';
import { formatNumber } from '@/utils/formatNumber';

import { PetitionModal } from './components/PetitionModal';

const TOTAL_PETITION = 1000;

export const PetitionDetail = () => {
  const { petitionId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation('petitionForm');
  if (isNaN(Number(petitionId))) navigate('/petition/feed');

  const { data } = useGetPetitionDetail(Number(petitionId));
  const petitionPercent = calculatePercentage(TOTAL_PETITION, data.agreementCount);

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
        name={data.name}
        title={data.title}
        ref={ref}
      />
      <div className="flex flex-col">
        <Spacing size={1.75} />
        <div className="flex items-center">
          <p className="inline-block text-[10px] text-[#228CFF]">{data.petitionType}</p>
          <img src={ClipBoardImg} className="h-[13px] w-[13px]" alt="petition icon" />
        </div>
        <p className="text-xl font-bold">{data.title}</p>
        <p className="inline-block text-[10px] text-[#939393]">
          {data.createdDate.replace(/-/g, '.')}
        </p>
        <Spacing size={3} />
        <p className="text-lg font-bold">{t('24')}</p>
        <p className="text-sm font-medium">
          {data.createdDate.replace(/-/g, '.')} ~ {data.agreementDeadline.replace(/-/g, '.')}
        </p>
        <Spacing size={3} />
        <p className="text-lg font-bold">{t('25')}</p>
        <div className="mb-1 flex flex-row justify-between">
          <div className="mb-1 flex flex-row">
            <PetitionIcon className="mr-[2px] h-[1.4rem] w-[1.4rem]" />
            <p className="text-sm font-bold">{formatNumber(data.agreementCount)}명</p>
          </div>
          <p className="text-sm font-bold">{petitionPercent}%</p>
        </div>
        <ProgressBar percentage={petitionPercent} />
        <Spacing size={3} />
        <p className="text-lg font-bold">{t('26')}</p>
        <p className="text-sm font-medium">{formatName(data.name)}</p>
        <Spacing size={3} />
        <p className="text-lg font-bold">{t('27')}</p>
        <div className="whitespace-pre-wrap text-xs leading-5">{data.purpose}</div>
        <Spacing size={3} />
        <p className="text-lg font-bold">{t('28')}</p>
        <div className="min-h-fit w-full whitespace-pre-wrap text-xs leading-5 tracking-[-0.04em]">
          {data.content}
        </div>
        <Spacing size={7} />
        <Button buttonLabel={t('29')} onClick={() => ref.current?.showModal()} />
      </div>
    </>
  );
};
