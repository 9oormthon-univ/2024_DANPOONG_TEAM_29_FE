import { useState } from 'react';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import Spacing from '../../components/Spacing';
import { TopBarControl } from '../../components/TopBarControl';
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
  const [previewUrl, setPreviewUrl] = useState('');

  const updateField = (field: Partial<FormData>) => {
    setFormData((prev) => {
      return { ...prev, ...field };
    });
  };
  const handlePrevClick = () => {
    return;
  };

  return (
    <div className="flex h-full flex-col">
      <TopBarControl handlePrevClick={handlePrevClick} title="청원 내용을 입력해주세요" size={30} />
      <Input
        value={formData.title}
        onChange={(e) => updateField({ title: e.target.value })}
        fieldLabel="분야"
        placeholder="선택해주세요"
        maxLength={100}
      />
      <Spacing size={1.75} />
      <Input
        value={formData.title}
        onChange={(e) => updateField({ title: e.target.value })}
        fieldLabel="제목"
        placeholder="제목을 입력해주세요"
        maxLength={100}
      />
      <Spacing size={1.75} />
      <Input
        value={formData.title}
        onChange={(e) => updateField({ title: e.target.value })}
        fieldLabel="청원의 취지"
        placeholder="취지를 입력해주세요"
        maxLength={100}
      />
      <Spacing size={1.75} />

      <div className="mb-[9px] flex justify-between">
        <span className="text-base">청원의 내용</span>
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
