import { useNavigate } from 'react-router-dom';

import { Panel } from './components/Panel';
import BookImg from '../../assets/book.png';
import EarthImg from '../../assets/earth.png';
import LikeImg from '../../assets/like.png';
import LogoImg from '../../assets/logo.png';
import { PetitionItem } from '../../components/petition/PetitionItem';
import Spacing from '../../components/Spacing';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex h-[60px] items-center justify-between">
        <img src={LogoImg} />
        <p className="text-lg font-bold">GlobalNest</p>
        {/* TODO: 전역 상태 가져와서 유저 이미지로 수정 */}
        <img src={LogoImg} className="h-8 w-8" />
      </div>
      <div className="relative flex justify-end">
        <div className="absolute bottom-0 left-0">
          {/* TODO: 전역 상태 가져와서 유저 네임으로 수정 */}
          <p className="text-xs"> Nickname님 반가워요! </p>
          <p className="text-base font-bold"> 새로운 소식이 있나요?</p>
        </div>
        <img src={EarthImg} className="h-auto w-[250px]" />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">인기 이야기</p>
        {/* TODO: 공감순으로 볼 수 있게 url 파라미터 추가 */}
        <Panel onClick={() => navigate('/feed')}>
          <img src={LikeImg} />
          <Spacing direction="horizontal" size={0.5} />
          <div>
            <p className="text-xs leading-6">많은 사람들의 공감을 얻은</p>
            <p className="text-sm font-bold">인기 이야기 보러가기</p>
          </div>
        </Panel>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">청원</p>
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
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">사용자 추천</p>
        {/* TODO: 링크 수정 */}
        <Panel onClick={() => navigate('/')}>
          <img src={BookImg} />
          <Spacing direction="horizontal" size={0.5} />
          <div>
            <p className="text-xs leading-6">내가 쓴 글의 태그와 비슷한</p>
            <p className="text-sm font-bold">다른 사람들의 이야기 보러가기</p>
          </div>
        </Panel>
      </div>
    </div>
  );
};
