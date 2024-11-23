import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import PrevClickIcon from '@/assets/prevClick.svg?react';
import { Button } from '@/components/Button';
import { Loading } from '@/components/Loading';
import Spacing from '@/components/Spacing';
import { usePostUserInfo } from '@/hooks/queries/userinfo.query';
import { useInfoStore } from '@/store/useInfoStore';
import { UserInfoType, AgeRange } from '@/types/userInfoType';

import { AuthMainTitle } from './components/AuthMainTitle';

export const UserInfo = () => {
  const [titleNum, setTitleNum] = useState(0);
  const { userList } = useInfoStore();
  const navigate = useNavigate();
  const { mutate, isPending, isError, error } = usePostUserInfo();
  const { t } = useTranslation('initInfo');

  const areaName = [
    {
      name: 'nickname',
      label: t('20'),
      type: 'text',
      validation: {
        required: {
          value: true,
          message: t('2'),
        },
        maxLength: 20,
        pattern: {
          value: /^[a-zA-Z가-힣]+$/,
          message: t('2'),
        },
      },
    },
    {
      name: 'ageRange',
      label: t('21'),
      type: 'select',
      options: Object.values(AgeRange),
      validation: {
        required: {
          value: true,
          message: t('12'),
        },
      },
    },
    {
      name: 'part',
      label: t('22'),
      type: 'select',
      options: [t('4'), t('5'), t('6'), t('7'), t('8'), t('9'), t('10')],
      validation: {
        required: {
          value: true,
          message: t('11'),
        },
      },
    },
    {
      name: 'name',
      label: t('23'),
      type: 'text',
      validation: {
        required: {
          value: true,
          message: t('2'),
        },
        maxLength: 50,
        pattern: {
          value: /^[a-zA-Z가-힣]+$/,
          message: t('2'),
        },
      },
    },
    {
      name: 'language',
      label: t('24'),
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
          message: t('0'),
        },
      },
    },
  ] as const;
  const titleList = [t('0'), t('1'), t('3'), t('12'), t('14'), t('17')];

  const onSubmit = (data: UserInfoType) => {
    console.log(data);
    mutate({ request: data, file: '' });
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserInfoType>({
    mode: 'onChange',
  });

  const TOTAL_QUESTIONS = 5;
  const startIndex = Math.max(TOTAL_QUESTIONS - titleNum - 1, 0);
  const curList = areaName.slice(startIndex, TOTAL_QUESTIONS);
  const buttonText = titleNum <= 3 ? t('15') : titleNum > 4 ? t('18') : t('16');

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

  if (isError) {
    alert(error.message);
  }

  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
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
                  {item.name === 'part' || item.name === 'language' || item.name === 'ageRange' ? (
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
            buttonLabel={isPending ? t('19') : buttonText}
            onClick={handleNextClick}
            disabled={!isValid || isPending}
            aria-busy={isPending}
            style={{
              backgroundColor: isValid ? '#1A8CFF' : '#B5B5B5',
            }}
          />
        </div>
      )}
    </>
  );
};
