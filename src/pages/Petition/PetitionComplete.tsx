import { useNavigate } from 'react-router-dom';

import petitionCompleteLogo from '@/assets/petition/petitionComplete.png';
import { Button } from '@/components/Button';
import Spacing from '@/components/Spacing';

export const PetitionComplete = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <Spacing size={10} />
      <img src={petitionCompleteLogo} alt="청원 완료" className="h-[180px] w-[180px]" />
      <p className="text-xl font-bold">청원 글에 동의하셨습니다!</p>
      <Spacing size={10} />
      <Button buttonLabel="홈으로 가기" onClick={() => navigate('/')} />
    </div>
  );
};
