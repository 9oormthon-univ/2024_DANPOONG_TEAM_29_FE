import { useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import EraseIcon from '@/assets/petition/eraser.png';
import PencilIcon from '@/assets/petition/pencil.png';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Loading } from '@/components/Loading';
import { Modal } from '@/components/Modal';
import Spacing from '@/components/Spacing';
import { TopBarControl } from '@/components/TopBarControl';
import { usePostPetition } from '@/hooks/queries/petition.query';
import { PetitionPostType } from '@/types/petitionType';

import { CustomTextArea } from './components/PetitionTextArea';

const options = [
  { value: 'WORKING_CONDITIONS', label: '노동 환경 개선' },
  { value: 'WAGES_AND_BENEFITS', label: '임금 및 복지' },
  { value: 'HOUSING_ISSUES', label: '주거 문제' },
  { value: 'LEGAL_PROTECTION', label: '법적 보호 및 권리' },
  { value: 'HEALTHCARE', label: '의료 및 건강 관리' },
  { value: 'EDUCATION_AND_ADAPTATION', label: '교육 및 한국 생활 적응' },
  { value: 'DISCRIMINATION_PREVENTION', label: '차별 및 부당 대우 방지' },
  { value: 'SOCIAL_RIGHTS_IMPROVEMENT', label: '사회적 권리 향상' },
];

export const PetitionForm = () => {
  const navigate = useNavigate();
  const { mutate, isError, error, isPending } = usePostPetition();
  const [formData, setFormData] = useState<PetitionPostType>({
    title: '',
    petitionType: '',
    content: '',
    purpose: '',
  });
  const [didEdit, setDidEdit] = useState({
    title: false,
    petitionType: false,
    content: false,
    purpose: false,
  });

  const ref = useRef<HTMLDialogElement>(null);
  const onClose = () => {
    ref.current?.close();
  };
  const onSubmit = () => {
    ref.current?.close();
    mutate(formData);
    navigate('/');
  };

  const isValid =
    formData.title === '' ||
    formData.content === '' ||
    formData.purpose === '' ||
    formData.petitionType === '';

  const updateField = (field: Partial<PetitionPostType>, identifier: string) => {
    setFormData((prev) => {
      return { ...prev, ...field };
    });
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateField({ petitionType: e.target.value }, 'petitionType');
  };

  function handleInputBlur(identifier: string) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  if (isError) {
    console.log(error.message);
  }

  return (
    <>
      <Modal
        ref={ref}
        onClose={onClose}
        onSubmit={onSubmit}
        buttonLabel="제출하기"
        disabled={false}
      >
        <div className="flex flex-col items-center">
          <img src={EraseIcon} alt="eraser" className="h-[150px] w-[150px]" />
          <p className="text-sm font-bold leading-[25px]">
            청원 제출 후에는 수정이나 삭제가 어렵습니다.
          </p>
          <p className="text-sm font-bold leading-[25px]">제출 전에 한 번 더 확인해주세요!</p>
          <p className="text-center text-[10px] font-light leading-[25px]">
            수정 및 삭제 필요 시 관리자에게 요청해주세요.
          </p>
          <Spacing size={5} />
        </div>
      </Modal>
      {isPending ? (
        <Loading />
      ) : (
        <div className="flex flex-col">
          <TopBarControl title="청원 내용을 입력해주세요" size={14}>
            <span className="inline-flex items-center">
              <img src={PencilIcon} alt="pencil" className="h-[24px] w-[24px]" />
            </span>
          </TopBarControl>
          <Spacing size={4} />
          <span className="text-base font-bold">분야</span>
          <Spacing size={0.75} />
          <select
            className="h-9 w-full rounded-[10px] border border-light-gray px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-[#228CFF]"
            value={formData.petitionType}
            onChange={handleTypeChange}
            onBlur={() => handleInputBlur('petitionType')}
          >
            <option value="" disabled>
              선택해주세요
            </option>
            {options.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <Spacing size={1.75} />
          <Input
            value={formData.title}
            onChange={(e) => updateField({ title: e.target.value }, 'title')}
            fieldLabel="제목"
            placeholder="제목을 입력해주세요"
            maxLength={100}
            onBlur={() => handleInputBlur('title')}
          ></Input>
          <Spacing size={1.75} />
          <CustomTextArea
            value={formData.purpose}
            onChange={(value) => updateField({ purpose: value }, 'purpose')}
            onBlur={() => handleInputBlur('purpose')}
            title="청원의 취지"
            areaHeight={140}
            placeholder="취지를 입력해주세요"
            isError={didEdit.purpose && formData.purpose.trim() === ''}
          />
          <Spacing size={1.75} />
        <CustomTextArea
          value={formData.content}
          onChange={(value) => updateField({ content: value }, 'content')}
          onBlur={() => handleInputBlur('content')}
          title="청원의 내용"
          areaHeight={329}
          placeholder="내용을 입력해주세요"
          isError={didEdit.content && formData.content.trim() === ''}
        />
          <Spacing size={0.75} />

          <Spacing size={5.2} />
          <Button
            buttonLabel="청원하기"
            onClick={() => ref.current?.showModal()}
            disabled={isValid}
            style={{
              backgroundColor: !isValid ? '#1A8CFF' : '#B5B5B5',
            }}
          />
        </div>
      )}
    </>
  );
};
