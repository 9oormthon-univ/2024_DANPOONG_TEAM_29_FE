import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import petitionCompleteLogo from '@/assets/petition/petitionComplete.png';
import { Button } from '@/components/Button';
import Spacing from '@/components/Spacing';

export const PetitionComplete = () => {
  const { t } = useTranslation('petitionForm');
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <Spacing size={10} />
      <img src={petitionCompleteLogo} alt="청원 완료" className="h-[180px] w-[180px]" />
      <p className="text-xl font-bold">{t('34')}</p>
      <Spacing size={10} />
      <Button buttonLabel={t('35')} onClick={() => navigate('/')} />
    </div>
  );
};
