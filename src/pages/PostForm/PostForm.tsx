import { useState } from 'react';

import DeleteIcon from '@/assets/delete.svg?react';
import PencilIcon from '@/assets/petition/pencil.png';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Spacing from '@/components/Spacing';
import { TopBarControl } from '@/components/TopBarControl';

import { ActionBar } from './components/ActionBar';
interface FormData {
  title: string;
  description: string;
  tagList?: string[] | null;
  image?: File | null;
}

export const PostForm = () => {
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

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }

    updateField({ image: file });
  };
  const isValid = formData.title == '' || formData.description == '';

  return (
    <div className="flex h-full flex-col">
      <TopBarControl title="이야기를 작성해보세요" size={12}>
        <span className="inline-flex items-center">
          <img src={PencilIcon} alt="pencil" className="h-[24px] w-[24px]" />
        </span>
      </TopBarControl>
      <Spacing size={2} />
      <Input
        value={formData.title}
        onChange={(e) => updateField({ title: e.target.value })}
        fieldLabel="제목"
        placeholder="제목을 입력해주세요"
        maxLength={100}
      />
      <Spacing size={1.75} />

      <div className="mb-[9px] flex justify-between">
        <span className="text-base font-bold">내용</span>
        <span>
          ({formData.description.length} / {500})
        </span>
      </div>
      <div className="flex min-h-[329px] flex-col justify-between rounded-[10px] border border-light-gray px-[11px] py-2">
        <textarea
          className="h-[140px] w-full resize-none outline-none focus:caret-[#54BBFF]"
          value={formData.description}
          onChange={(e) => updateField({ description: e.target.value })}
          placeholder="내용을 입력해주세요"
        />
        {previewUrl && (
          <div className="relative pt-2">
            <img src={previewUrl} className="w-full rounded-xl" alt="preview" />
            <DeleteIcon
              onClick={() => {
                updateField({ image: null });
                setPreviewUrl('');
              }}
              className="absolute right-0 top-0"
            />
          </div>
        )}
      </div>

      <Spacing size={0.75} />
      <ActionBar
        tagList={formData.tagList || []}
        onChangeImage={handleChangeImage}
        onChangeTag={(tagList) => updateField({ tagList })}
      />
      <Spacing size={5.2} />
      {/* TODO: 서버 API 연결 */}
      <Button
        buttonLabel="게시하기"
        onClick={() => console.log(formData)}
        disabled={isValid}
        style={{
          backgroundColor: !isValid ? '#1A8CFF' : '#B5B5B5',
        }}
      />
    </div>
  );
};
