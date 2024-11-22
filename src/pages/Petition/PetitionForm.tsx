import { useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import EraseIcon from '@/assets/petition/eraser.png';
import PencilIcon from '@/assets/petition/pencil.png';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Modal } from '@/components/Modal';
import Spacing from '@/components/Spacing';
import { TopBarControl } from '@/components/TopBarControl';
interface FormData {
  title: string;
  contents: string;
  category: string;
  intend: string;
}

const options = [
  { value: 'housing', label: '주거 문제' },
  { value: 'wages-benefits', label: '임금 및 복지' },
  { value: 'labor-environment', label: '노동 환경 개선' },
  { value: 'healthcare', label: '의료 및 건강관리' },
  { value: 'social-rights', label: '사회적 권리 향상' },
  { value: 'legal-protection', label: '법적 보호 및 권리' },
  { value: 'education-adaptation', label: '교육 및 한국 생활 적응' },
  { value: 'discrimination', label: '차별 및 부당 대우 방지' },
];

export const PetitionForm = () => {
  const navigate = useNavigate();

  const ref = useRef<HTMLDialogElement>(null);
  const onClose = () => {
    ref.current?.close();
  };
  const onSubmit = () => {
    console.log(formData);
    navigate('/');
  };
  const [formData, setFormData] = useState<FormData>({
    title: '',
    category: '',
    contents: '',
    intend: '',
  });
  const isValid =
    formData.title === '' ||
    formData.contents === '' ||
    formData.intend === '' ||
    formData.category === '';
  const updateField = (field: Partial<FormData>) => {
    setFormData((prev) => {
      return { ...prev, ...field };
    });
  };

  const handlePrevClick = () => {
    return;
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateField({ category: e.target.value });
  };

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
      <div className="flex flex-col">
        <div className="flex flex-row">
          <TopBarControl
            handlePrevClick={handlePrevClick}
            title="청원 내용을 입력해주세요"
            size={15}
          ></TopBarControl>
          <span className="inline-flex items-center">
            <img src={PencilIcon} alt="pencil" className="h-[24px] w-[24px]" />
          </span>
        </div>

        <Spacing size={4} />
        <span className="text-base font-bold">분야</span>
        <Spacing size={0.75} />
        <select
          className="h-9 w-full rounded-[10px] border border-light-gray px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-[#228CFF]"
          value={formData.category} 
          onChange={handleCategoryChange} 
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
          onChange={(e) => updateField({ title: e.target.value })}
          fieldLabel="제목"
          placeholder="제목을 입력해주세요"
          maxLength={100}
        ></Input>
        <Spacing size={1.75} />
        <div className="mb-[9px] flex justify-between">
          <span className="text-base font-bold">청원의 취지</span>
        </div>
        <div className="flex min-h-[80px] flex-col justify-between rounded-[10px] border border-light-gray px-[11px] py-2">
          <textarea
            className="h-[140px] w-full resize-none whitespace-pre-wrap rounded-md outline-none focus:caret-[#54BBFF] focus:outline-[#228CFF]"
            value={formData.intend}
            onChange={(e) => updateField({ intend: e.target.value })}
            placeholder="내용을 입력해주세요"
          />
        </div>
        <Spacing size={1.75} />

        <div className="mb-[9px] flex justify-between">
          <span className="text-base font-bold">청원의 내용</span>
        </div>
        <div className="flex min-h-[329px] flex-col justify-between rounded-[10px] border border-light-gray px-[11px] py-2">
          <textarea
            className="h-[329px] w-full resize-none whitespace-pre-wrap rounded-md border-none outline-none focus:caret-[#54BBFF] focus:outline-[#228CFF]"
            value={formData.contents}
            onChange={(e) => updateField({ contents: e.target.value })}
            placeholder="내용을 입력해주세요"
          />
        </div>
        <p className="text-xs text-[#FF7A7A]"></p>

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
    </>
  );
};
