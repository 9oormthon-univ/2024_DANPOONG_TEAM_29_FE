import { useState } from 'react';

import PencilIcon from '@/assets/pencil.svg?react';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Spacing from '@/components/Spacing';
import { TopBarControl } from '@/components/TopBarControl';

interface FormData {
  title: string;
  description: string;
  tagList?: string[] | null;
  image?: File | null;
}

export const PetitionForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
  });
  const [previewUrl] = useState('');

  const updateField = (field: Partial<FormData>) => {
    setFormData((prev) => {
      return { ...prev, ...field };
    });
  };
  const handlePrevClick = () => {
    return;
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        {' '}
        <TopBarControl
          handlePrevClick={handlePrevClick}
          title="청원 내용을 입력해주세요"
          size={15}
        ></TopBarControl>
        <PencilIcon />
      </div>

      <Spacing size={4} />
      <span className="text-base">
        분야 <span className="font-bold text-[#FF0000]">*</span>
      </span>
      <Spacing size={0.75} />
      <select className="h-9 w-full rounded-[10px] border border-light-gray px-3 py-2">
        <option value="" disabled selected>
          문제를 선택하세요
        </option>
        <option value="housing">주거 문제</option>
        <option value="wages-benefits">임금 및 복지</option>
        <option value="labor-environment">노동 환경 개선</option>
        <option value="healthcare">의료 및 건강관리</option>
        <option value="social-rights">사회적 권리 향상</option>
        <option value="legal-protection">법적 보호 및 권리</option>
        <option value="education-adaptation">교육 및 한국 생활 적응</option>
        <option value="discrimination">차별 및 부당 대우 방지</option>
      </select>
      <Spacing size={1.75} />
      <Input
        value={formData.title}
        onChange={(e) => updateField({ title: e.target.value })}
        fieldLabel="제목"
        placeholder="제목을 입력해주세요"
        maxLength={100}
        lengthOption={true}
      >
        <span className="font-bold text-[#FF0000]">*</span>
      </Input>
      <Spacing size={1.75} />
      <Input
        value={formData.title}
        onChange={(e) => updateField({ title: e.target.value })}
        fieldLabel="청원의 취지"
        placeholder="취지를 입력해주세요"
        maxLength={100}
        lengthOption={true}
      >
        {' '}
        <span className="font-bold text-[#FF0000]">*</span>
      </Input>
      <Spacing size={1.75} />

      <div className="mb-[9px] flex justify-between">
        <span className="text-base">
          청원의 내용 <span className="font-bold text-[#FF0000]">*</span>
        </span>

        <span>
          ({formData.description.length} / {500})
        </span>
      </div>
      <div className="flex min-h-[329px] flex-col justify-between rounded-[10px] border border-light-gray px-[11px] py-2">
        <textarea
          className="h-[140px] w-full resize-none outline-none"
          value={formData.description}
          onChange={(e) => updateField({ description: e.target.value })}
          placeholder="내용을 입력해주세요"
        />
        {previewUrl && (
          <div className="relative pt-2">
            <img src={previewUrl} className="w-full rounded-xl" alt="preview" />
          </div>
        )}
      </div>

      <Spacing size={0.75} />

      <Spacing size={5.2} />
      {/* TODO: 서버 API 연결 */}
      <Button
        buttonLabel="청원하기"
        onClick={() => console.log(formData)}
        disabled={formData.title == '' || formData.description == ''}
      />
    </div>
  );
};
