import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import KakaoIcon from '@/assets/auth/kakaoIcon.png';

import { AuthMainTitle } from './components/AuthMainTitle';
export const SignUpForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('initInfo');
  const handleLogin = () => {
    navigate('/auth/userinfo');
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <AuthMainTitle
        title="GlobalNest"
        authStyle="m-[2rem] h-[1.4375rem] w-full text-center text-2xl font-bold"
      />
      <button
        onClick={handleLogin}
        className="flex h-[3rem] w-full flex-row items-center justify-center gap-2 rounded-xl bg-[#FEE500] p-[0.2rem]"
      >
        <img src={KakaoIcon} alt="kakoIcon" className="h-6 w-6" />
        <div className="text-center font-bold">kakao{t('25')}</div>
      </button>
    </div>
  );
};
