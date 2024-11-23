import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import DeleteIcon from '@/assets/delete.svg?react';
import PencilIcon from '@/assets/petition/pencil.png';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Spacing from '@/components/Spacing';
import { TopBarControl } from '@/components/TopBarControl';
import { usePostStory } from '@/hooks/queries/post.query';

import { ActionBar } from './components/ActionBar';

interface FormData {
  title: string;
  description: string;
  tagList?: string[] | null;
  image?: File | null;
}

export const PostForm = () => {
  const postStory = usePostStory();
  const navigate = useNavigate();
  const { t } = useTranslation('form');
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
  });
  const [previewUrl, setPreviewUrl] = useState('');
  const isValid = formData.title == '' || formData.description == '';

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

  const handleSubmit = async () => {
    const multipartFormData = new FormData();

    const postUploadRequest = JSON.stringify({
      title: formData.title,
      content: formData.description,
      tags: formData.tagList,
    });
    multipartFormData.append('postUploadRequest', postUploadRequest);

    if (formData.image) {
      multipartFormData.append('file', formData.image);
    }

    await postStory.mutateAsync(multipartFormData);
    navigate('/feed');
  };

  return (
    <div className="flex h-full flex-col">
      <TopBarControl title={t('0')} size={12}>
        <span className="inline-flex items-center">
          <img src={PencilIcon} alt="pencil" className="h-[24px] w-[24px]" />
        </span>
      </TopBarControl>
      <Spacing size={2} />
      <Input
        value={formData.title}
        onChange={(e) => updateField({ title: e.target.value })}
        fieldLabel={t('1')}
        placeholder={t('2')}
        maxLength={100}
      />
      <Spacing size={1.75} />

      <div className="mb-[9px] flex justify-between">
        <span className="text-base font-bold">{t('5')} </span>
        <span>
          ({formData.description.length} / {500})
        </span>
      </div>
      <div className="flex min-h-[329px] flex-col justify-between rounded-[10px] border border-light-gray px-[11px] py-2">
        <textarea
          className="h-[140px] w-full resize-none outline-none focus:caret-[#54BBFF]"
          value={formData.description}
          onChange={(e) => updateField({ description: e.target.value })}
          placeholder={t('3')}
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
      <Spacing size={2} />
      <Button buttonLabel={t('4')} onClick={handleSubmit} disabled={isValid} />
    </div>
  );
};
