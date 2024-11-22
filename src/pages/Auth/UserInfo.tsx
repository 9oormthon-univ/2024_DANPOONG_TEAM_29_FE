import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import PrevClickIcon from '@/assets/prevClick.svg?react';
import { Button } from '@/components/Button';
import Spacing from '@/components/Spacing';
import { useInfoStore } from '@/store/useInfoStore';
import { UserItem } from '@/types/userInfoType';

import { AuthMainTitle } from './components/AuthMainTitle';

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
    label: '닉네임',
    type: 'text',
    validation: {
      required: {
        value: true,
        message: '닉네임은 필수 항목입니다.',
      },
      maxLength: 20,
      pattern: {
        value: /^[a-zA-Z가-힣]+$/,
        message: '닉네임에는 숫자나 특수문자를 사용할 수 없습니다.',
      },
    },
  },
  {
    name: 'age',
    label: '나이',
    type: 'number',
    validation: {
      required: {
        value: true,
        message: '나이는 필수 항목입니다.',
      },
      min: {
        value: 18,
        message: '나이는 최소 18세 이상이어야 합니다.',
      },
      max: {
        value: 99,
        message: '나이는 99세 이하이어야 합니다.',
      },
      pattern: {
        value: /^[0-9]+$/,
        message: '숫자만 입력할 수 있습니다.',
      },
    },
  },
  {
    name: 'career',
    label: '직업',
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
    validation: {
      required: {
        value: true,
        message: '직업은 필수 항목입니다.',
      },
    },
  },
  {
    name: 'name',
    label: '이름',
    type: 'text',
    validation: {
      required: {
        value: true,
        message: '이름은 필수 항목입니다.',
      },
      maxLength: 50,
      pattern: {
        value: /^[a-zA-Z가-힣]+$/,
        message: '이름에는 숫자나 특수문자를 사용할 수 없습니다.',
      },
    },
  },
  {
    name: 'language',
    label: '언어',
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
    validation: {
      required: {
        value: true,
        message: '언어는 필수 항목입니다.',
      },
    },
  },
] as const;

export const UserInfo = () => {
  const [titleNum, setTitleNum] = useState(0);
  const { setUserList, userList } = useInfoStore();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data: UserItem[]) => {
    setUserList(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    mode: 'onChange',
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
          {curList.map((item, index) => (
            <div key={item.name} className="mt-[2.2rem]">
              {item.name === 'career' || item.name === 'language' ? (
                <>
                  <select
                    disabled={index >= 1}
                    id={`input-${item.name}`}
                    {...register(item.name, item.validation)}
                    aria-invalid={errors[item.name] ? 'true' : 'false'}
                    className="h-[3rem] w-full border-b border-[#54BBFF] outline-none disabled:bg-transparent disabled:text-[#838383]"
                  >
                    <option value="" disabled selected className="p-1">
                      {item.label}
                    </option>
                    {item.options.map((e) => (
                      <option value={e} key={e} className="p-1">
                        {e}
                      </option>
                    ))}
                  </select>
                  {errors[item.name] && <p>{errors[item.name]?.message}</p>}
                </>
              ) : (
                <>
                  {/* TODO: fix:자동완성 시 배경이 바뀜 */}
                  <input
                    id={`input-${item.name}`}
                    disabled={index >= 1}
                    {...register(item.name, item.validation)}
                    aria-invalid={errors[item.name] ? 'true' : 'false'}
                    className="h-[3rem] w-full border-b border-[#54BBFF] outline-none focus:caret-[#54BBFF] disabled:bg-transparent disabled:text-[#838383]"
                    placeholder={item.label}
                  />
                  <Spacing size={0.2} />
                  {errors[item.name] && (
                    <p className="text-xs text-[#FF7A7A]">{errors[item.name]?.message}</p>
                  )}
                </>
              )}
            </div>
          ))}
        </form>
      )}
      <Button
        buttonLabel={isLoading ? '처리 중...' : buttonText}
        onClick={handleNextClick}
        disabled={!isValid || isLoading}
        aria-busy={isLoading}
        style={{
          backgroundColor: isValid ? '#1A8CFF' : '#B5B5B5',
        }}
      />
    </div>
  );
};
