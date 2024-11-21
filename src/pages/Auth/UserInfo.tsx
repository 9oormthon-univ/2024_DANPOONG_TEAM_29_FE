import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import PrevClickIcon from '@/assets/prevClick.svg?react';

import { AuthMainTitle } from './components/AuthMainTitle';
import Spacing from '../../components/Spacing';
import { useInfoStore } from '../../store/useInfoStore';
import { UserItem } from '../../types/userInfoType';
const titleList = [
  '사용하시는 언어가 무엇인가요?',
  '이름이 어떻게 되시나요?',
  '어떤 직종을 가지고 계신가요?',
  '나이대를 선택해주세요.',
  '닉네임을 입력해주세요.',
  '당신의 이야기를 우리에게 들려주세요!',
];

interface IFormInput {
  name: string;
  age: number;
  career: string;
  nickName: string;
  language: string;
}
const areaName = [
  {
    name: 'nickName',
    type: 'text',
    validation: {
      required: true,
      maxLength: 20,
      pattern: /^[a-zA-Z가-힣]+$/, // 한글 및 알파벳만 허용
    },
  },
  {
    name: 'age',
    type: 'number',
    validation: {
      required: true,
      min: 18,
      max: 99,
    },
  },
  {
    name: 'career',
    type: 'select',
    options: [
      '제조업',
      '건설업',
      '운전 및 운송',
      '서비스업',
      '농업 및 축산업',
      '어업',
      '가사 및 돌봄',
      '전문직',
    ],
  },
  {
    name: 'name',
    type: 'text',
    validation: {
      required: true,
      maxLength: 50,
      pattern: /^[a-zA-Z가-힣]+$/, // 한글 및 알파벳만 허용
    },
  },
  {
    name: 'language',
    type: 'select',
    options: [
      '한국어',
      '중국어',
      '베트남어',
      '따갈로그어(필리핀)',
      '태국어',
      '인도네시아어',
      '싱할라어(스리라카)',
    ],
  },
] as const;

export const UserInfo = () => {
  const [titleNum, setTitleNum] = useState(0);
  const { setUserList, userList } = useInfoStore();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data: UserItem[]) => {
    setUserList(data);
    //console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    mode: 'onChange', // 실시간으로 폼 유효성 검사
  });

  const navigate = useNavigate();
  const TOTAL_QUESTIONS = 5;
  const startIndex = Math.max(TOTAL_QUESTIONS - titleNum - 1, 0);
  const curList = areaName.slice(startIndex, TOTAL_QUESTIONS);
  const buttonText = titleNum <= 3 ? '다음' : titleNum > 4 ? '환영합니다' : '제출하기';

  const handleNextClick = () => {
    if (titleNum === 4) {
      handleSubmit(onSubmit)();
      setTitleNum((num) => Math.min(num + 1, titleList.length - 1));
    } else if (titleNum === 5) {
      navigate('/auth');
      console.log(userList);
    } else {
      setTitleNum((num) => Math.min(num + 1, titleList.length - 1));
    }
  };

  const handlePrevClick = () => {
    setTitleNum((num) => Math.max(num - 1, 0));
  };

  return (
    <div className="w-full flex-col items-center">
      {titleNum < 5 ? (
        <div className="top-[3rem] flex h-[5rem] w-full flex-col items-center justify-center">
          <button className="w-[100%]" onClick={handlePrevClick}>
            <PrevClickIcon />
          </button>
          <div className="mt-[2rem] w-full text-xl font-bold">{titleList[titleNum]}</div>
        </div>
      ) : (
        <>
          <Spacing size={10} />
          <div className="mb-[10%] flex w-full flex-col items-center">
            <AuthMainTitle
              title={titleList[titleNum]}
              authStyle=" m-[2rem] h-[1.4375rem] w-full text-center text-2xl font-bold"
            />
          </div>
        </>
      )}

      {titleNum <= 4 && (
        <form className="flex h-[30rem] w-full flex-col">
          {curList.map((item) => (
            <div key={item.name} className="mt-[2.2rem]">
              {item.name === 'career' || item.name === 'language' ? (
                <select
                  id={`input-${item.name}`}
                  {...register(item.name)}
                  aria-invalid={errors[item.name] ? 'true' : 'false'}
                  className="h-[3rem] w-full border-b border-[#54BBFF] outline-none"
                >
                  <option value="" disabled>
                    {item.name} 선택
                  </option>
                  {item.options.map((e) => (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={`input-${item.name}`}
                  {...register(item.name, item.validation)}
                  aria-invalid={errors[item.name] ? 'true' : 'false'}
                  className="h-[3rem] w-full border-b border-[#54BBFF] outline-none"
                  placeholder={item.name}
                />
              )}
            </div>
          ))}
        </form>
      )}

      <button
        className={`h-[3rem] w-[100%] rounded-xl text-center text-white ${
          isValid ? 'bg-[#1A8CFF]' : 'bg-gray-400 cursor-not-allowed bg-[#1A8CFF]'
        }`}
        onClick={handleNextClick}
        disabled={!isValid || isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? '처리 중...' : buttonText}
      </button>
    </div>
  );
};
