import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import ToggleButtonIcon from '@/assets/toggle.svg?react';
import { PetitionItem } from '@/components/petition/PetitionItem';
import Spacing from '@/components/Spacing';
import { useGetPetitionList } from '@/hooks/queries/petition.query';
import { useScrollObserve } from '@/hooks/useScrollObserve';
import { PetitionItemType } from '@/types/petitionType';

export const PetitionFeed = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('petitionForm');

  const clickPage = (petitionId: number) => {
    navigate(`/petition/${petitionId}`);
  };

  // TODO: 카테고리 추가 구현 필요
  const { data: petitionList, isPending, fetchNextPage, hasNextPage } = useGetPetitionList('');

  const { lastElementRef } = useScrollObserve<PetitionItemType[]>({
    isPending,
    fetchNextPage,
    hasNextPage,
  });

  return (
    <div className="flex-col">
      <Spacing size={1.4} />
      <div className="flex w-full flex-row-reverse">
        <div className="flex h-[1rem] w-[1rem] items-center">
          <ToggleButtonIcon className="h-[0.5rem] w-[0.7rem]" />
        </div>
        <span className="text-center text-xs font-extrabold">{t('36')}</span>
      </div>
      <Spacing size={2} />
      <div className="max-h-4xl grid h-[600px] grid-cols-2 gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
        {petitionList.pages.flatMap((page) =>
          page.map((petition) => (
            <PetitionItem key={petition.id} {...petition} onClick={() => clickPage(petition.id)} />
          )),
        )}
        <div ref={lastElementRef} />
      </div>
    </div>
  );
};
