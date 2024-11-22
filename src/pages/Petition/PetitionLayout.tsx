import { Outlet } from 'react-router-dom';

import AlarmIcon from '@/assets/alarm.svg?react';
import Spacing from '@/components/Spacing';
import { TopBarControl } from '@/components/TopBarControl';

export const PetitionLayout = () => {
  const handlePrevClick = () => {
    return;
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <TopBarControl handlePrevClick={handlePrevClick} title="청원" size={3} />
        <Spacing size={15} direction="horizontal" />
        <AlarmIcon />
      </div>
      <Outlet />
    </div>
  );
};
