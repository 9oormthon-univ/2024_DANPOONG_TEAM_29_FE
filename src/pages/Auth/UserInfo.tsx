import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import PrevClickIcon from '@/assets/prevClick.svg?react';

import { AuthMainTitle } from './components/AuthMainTitle';
import { useInfoStore } from '../../store/useInfoStore';
import { UserInfoType } from '../../types/userInfoType';

/** 바꾸어야 할 부분의 코드*/
const titleList = [
  '사용하시는 언어가 무엇인가요?',
  '이름이 어떻게 되시나요?',
  '어떤 직종을 가지고 계신가요? ',
  '나이대를 선택해주세요.',
  '닉네임을 입력해주세요.',
  '당신의 이야기를 우리에게 들려주세요!',
];

export const UserInfo = () => {
  const [titleNum, setTitleNum] = useState(0);
  const { userList, updateUser } = useInfoStore();
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const naviagate = useNavigate();
  const TOTAL_QUESTIONS = 5;
  const startIndex = Math.max(TOTAL_QUESTIONS - titleNum - 1, 0);
  const curList = [...userList.slice(startIndex, TOTAL_QUESTIONS)];
  const buttonText = titleNum <= 3 ? '다음' : titleNum > 4 ? '환영합니다' : '제출하기';
  function handleNextClick() {
    setTitleNum((num) => Math.min(num + 1, titleList.length - 1));
    if (titleNum >= 5) naviagate('/auth');
  }
  function handlePrevClick() {
    setTitleNum((num) => Math.max(num - 1, 0));
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>, type: UserInfoType) {
    const value = e.target.value.trim();
    if (!value) return;

    updateUser(type, e.target.value);
  }
  console.log(titleNum, curList);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      {titleNum < 5 ? (
        <div className="top-[3rem] flex h-[10%] w-full flex-col items-center justify-center">
          <button className="w-[100%]" onClick={handlePrevClick}>
            <PrevClickIcon />
          </button>
          <div className="mt-[2rem] w-full text-xl font-bold">{titleList[titleNum]}</div>
        </div>
      ) : (
        <div className="mb-[10%] flex w-full flex-col items-center">
          <AuthMainTitle
            title={titleList[titleNum]}
            authStyle=" m-[2rem] h-[1.4375rem] w-full text-center text-2xl font-bold"
          />
        </div>
      )}
      {titleNum <= 4 && (
        <div className="flex h-[80%] w-full flex-col">
          {curList.map((item, index) => (
            <input
              id={`input-${item.type}`}
              aria-label={item.type}
              required
              aria-required="true"
              disabled={index >= 1}
              key={item.type}
              className="mt-[2.2rem] h-[3rem] w-full border-b border-[#54BBFF] outline-none"
              placeholder={item.type}
              value={item.value}
              onChange={(e) => handleChange(e, item.type)}
              onInvalid={(e) => {
                e.preventDefault();
              }}
            ></input>
          ))}
        </div>
      )}

      <button
        className={`h-[3rem] w-[100%] rounded-xl text-center text-white ${isValid ? 'bg-[#1A8CFF]' : 'bg-gray-400 cursor-not-allowed'}`}
        onClick={handleNextClick}
        disabled={!isValid || isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? '처리 중...' : buttonText}
      </button>
    </div>
  );
};
