import AlarmIcon from '@/assets/alarm.svg?react';
import DetailButtonIcon from '@/assets/detailButton.svg?react';

import { TopBarControl } from '../../../components/TopBarControl';
interface TopBarControlProps {
  handlePrevClick: () => void;
}

export const PetitionTopbar = ({ handlePrevClick }: TopBarControlProps) => {
  return (
    <div className="flex-row">
      <TopBarControl handlePrevClick={handlePrevClick} title="청원" size={3} />
      <AlarmIcon />
      <DetailButtonIcon />
    </div>
  );
};
