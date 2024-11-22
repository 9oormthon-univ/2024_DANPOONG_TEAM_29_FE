import React from 'react';

interface FormData {
  title: string;
  contents: string;
  category: string;
  intend: string;
}

interface PetitionTextAreaProps {
  formData: FormData;
  title: string;
  type: keyof FormData; // 'title' | 'contents' | 'category' | 'intend'
  length: number;
  updateField: (e: React.ChangeEvent<HTMLTextAreaElement>, fieldName: keyof FormData) => void;
}

export const PetitionTextArea = ({ formData, updateField, type, title }: PetitionTextAreaProps) => {
  return (
    <>
      <div className="mb-[9px] flex justify-between">
        <span className="text-base">
          {title} <span className="font-bold text-[#FF0000]">*</span>
        </span>
      </div>
      <div className="flex min-h-[329px] flex-col justify-between rounded-[10px] border border-light-gray px-[11px] py-2">
        <textarea
          className="h-[140px] w-full resize-none outline-none"
          value={formData[type]}
          onChange={(e) => updateField(e, type)} // Pass the event and the type of the field
          placeholder="내용을 입력해주세요"
        />
      </div>
    </>
  );
};
