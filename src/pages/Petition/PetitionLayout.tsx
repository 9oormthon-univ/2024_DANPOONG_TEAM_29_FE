import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import AlarmIcon from '@/assets/alarm.svg?react';
import Spacing from '@/components/Spacing';
import { TopBarControl } from '@/components/TopBarControl';

export const PetitionLayout = () => {
  const { t } = useTranslation('petitionForm');
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <TopBarControl title={t('22')} size={3} />
        <Spacing size={15} direction="horizontal" />
        <AlarmIcon />
      </div>
      <Outlet />
    </div>
  );
};
