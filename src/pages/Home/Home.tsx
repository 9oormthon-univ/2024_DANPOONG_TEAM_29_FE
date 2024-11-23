import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import BookImg from '@/assets/home/book.png';
import EarthImg from '@/assets/home/earth.png';
import LikeImg from '@/assets/home/like.png';
import TextLogoImg from '@/assets/home/textLogo.png';
import LogoImg from '@/assets/logo.png';
import { PetitionItem } from '@/components/petition/PetitionItem';
import Spacing from '@/components/Spacing';

import { Panel } from './components/Panel';

export const Home = () => {
  const { t } = useTranslation('home');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex h-[60px] items-center justify-between">
        <img src={LogoImg} alt="graphic logo" />
        <img src={TextLogoImg} alt="text logo" />
        {/* TODO: 전역 상태 가져와서 유저 이미지로 수정 */}
        <img src={LogoImg} className="h-8 w-8" />
      </div>
      <div className="relative flex justify-end">
        <div className="absolute bottom-0 left-0">
          {/* TODO: 전역 상태 가져와서 유저 네임으로 수정 */}
          <p className="text-xs"> Nickname님 반가워요! </p>
          <p className="text-base font-bold">{t('0')}</p>
        </div>
        <img src={EarthImg} className="h-auto w-[250px]" />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">{t('1')}</p>
        <Panel onClick={() => navigate('feed?sortType=LIKE_DESC')}>
          <img src={LikeImg} />
          <Spacing direction="horizontal" size={0.5} />
          <div>
            <p className="text-xs leading-6">{t('2')}</p>
            <p className="text-sm font-bold">{t('3')}</p>
          </div>
        </Panel>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">{t('4')}</p>
        <div className="grid grid-cols-2 gap-3">
          {/* TODO: 서버 데이터로 교체 */}
          {[1, 2, 3, 4].map((n) => (
            <PetitionItem
              key={n}
              category="노동 환경 개선"
              title="불공정한 임금 체불 문제 해결을 위한 노동자 보호 요청"
              count={1000}
              startDate="2024.11.14"
              endDate="2024.11.29"
              onClick={() => navigate('petition/1')}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">{t('5')}</p>
        {/* TODO: 전역 상태 가져와서 유저 직종으로 수정 */}
        <Panel onClick={() => navigate(`feed?sortType=${'CREATED_AT_DESC'}`)}>
          <img src={BookImg} />
          <Spacing direction="horizontal" size={0.5} />
          <div>
            <p className="text-xs leading-6">{t('6')}</p>
            <p className="text-sm font-bold">{t('7')}</p>
          </div>
        </Panel>
      </div>
    </div>
  );
};
