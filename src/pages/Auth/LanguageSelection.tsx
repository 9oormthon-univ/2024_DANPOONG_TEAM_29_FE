import { useNavigate } from 'react-router-dom';

import { AuthMainTitle } from './components/AuthMainTitle';
import Spacing from '../../components/Spacing';
const SUPPORTED_LANGUAGES = [
  '한국어',
  '중국어',
  '베트남어',
  '따갈로그어(필리핀)',
  '태국어',
  '인도네시아어',
  '싱할라어(스리라카)',
] as const;
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
export const LanguageSelection = () => {
  const navigate = useNavigate();

  const handleLanguageSelect = (language: SupportedLanguage) => {
    navigate('/', { state: { selectedLanguage: language } });
  };
  return (
    <div className="flex flex-col items-center">
      <Spacing size={8} direction="vertical" className="w-full" />
      <AuthMainTitle
        title="자주 사용하시는 언어를 선택해주세요"
        authStyle="m-[2rem] h-[1.4375rem] w-full text-center text-base font-bold"
      />
      <div
        className={`m-t-[3rem] scrollbar-hide flex max-h-[calc(5*2.2rem)] w-[70%] flex-col overflow-y-auto scroll-smooth border-b-[0.5px] border-b-[#D0D0D0] [&::-webkit-scrollbar]:hidden`}
      >
        {SUPPORTED_LANGUAGES.map((item) => (
          <button
            role="option"
            aria-selected="false"
            key={item}
            className="h-[2.2rem] border-t-[0.5px] border-t-[#D0D0D0] p-[0.3rem]"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleLanguageSelect(item);
              }
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

