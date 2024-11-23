import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Spacing from '@/components/Spacing';

import { AuthMainTitle } from './components/AuthMainTitle';

const SUPPORTED_LANGUAGES = [
  '한국어',
  '汉文',
  'tiếng Việt',
  'Bahasa Indonésia',
  'ภาษาไทย',
] as const;

type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const LanguageSelection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('initInfo');
  const handleLanguageSelect = (language: SupportedLanguage) => {
    navigate('/', { state: { selectedLanguage: language } });
  };
  return (
    <div className="flex flex-col items-center">
      <Spacing size={8} direction="vertical" className="w-full" />
      <AuthMainTitle
        title={t('26')}
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
