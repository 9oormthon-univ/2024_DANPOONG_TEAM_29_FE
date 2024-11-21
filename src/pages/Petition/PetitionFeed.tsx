import AlarmIcon from '@/assets/alarm.svg?react';
import DetailButtonIcon from '@/assets/detailButton.svg?react';

import { PetitionItem } from '../../components/petition/PetitionItem';
import Spacing from '../../components/Spacing';
import { TopBarControl } from '../../components/TopBarControl';
export const PetitionFeed = () => {
  const handlePrevClick = () => {
    return;
  };
  return (
    <div className="flex h-full flex-col">
      <TopBarControl handlePrevClick={handlePrevClick} title="청원" size={3}>
        <Spacing size={10} direction="horizontal"></Spacing>
        <AlarmIcon />
        <DetailButtonIcon />
      </TopBarControl>
      <div className="max-h-4xl grid h-[600px] grid-cols-2 gap-4 overflow-auto">
        <PetitionItem
          category="노동 환경 개선"
          title="불공정한 임금 체불 문제 해결을 위한 노동자 보호 요청"
          startDate="2024.11.14"
          endDate="2024.11.29"
          count={1000}
        />
        <PetitionItem
          category="노동 환경 개선"
          title="불공정한 임금 체불 문제 해결을 위한 노동자 보호 요청"
          startDate="2024.11.14"
          endDate="2024.11.29"
          count={1000}
        />
        <PetitionItem
          category="노동 환경 개선"
          title="불공정한 임금 체불 문제 해결을 위한 노동자 보호 요청"
          startDate="2024.11.14"
          endDate="2024.11.29"
          count={1000}
        />
        <PetitionItem
          category="노동 환경 개선"
          title="불공정한 임금 체불 문제 해결을 위한 노동자 보호 요청"
          startDate="2024.11.14"
          endDate="2024.11.29"
          count={1000}
        />
        <PetitionItem
          category="노동 환경 개선"
          title="불공정한 임금 체불 문제 해결을 위한 노동자 보호 요청"
          startDate="2024.11.14"
          endDate="2024.11.29"
          count={1000}
        />
        <PetitionItem
          category="노동 환경 개선"
          title="불공정한 임금 체불 문제 해결을 위한 노동자 보호 요청"
          startDate="2024.11.14"
          endDate="2024.11.29"
          count={1000}
        />
      </div>
    </div>
  );
};
