import { useState, useRef } from 'react';

import TagPlusIcon from '@/assets/tagPlus.svg?react';
import Spacing from '@/components/Spacing';

import { TagItem } from './TagItem';
interface TagBottomSheetProps {
  onAddTags: (target: string[]) => void;
  onClose: () => void;
}
export const TagBottomSheet = ({ onAddTags, onClose }: TagBottomSheetProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTag = () => {
    const target = inputRef.current?.value || '';

    if (target) {
      setTags((prev) => [...prev, target]);
      inputRef.current!.value = '';
    }
  };

  const handleDeleteTag = (target: string) => {
    setTags((prev) => prev.filter((tag) => tag !== target));
  };

  const handleClose = () => {
    onAddTags(tags);
    onClose();
  };

  return (
    <div
      className="z-999 absolute left-0 top-0 flex h-full w-full items-end bg-[rgba(0,0,0,0.5)]"
      onClick={handleClose}
    >
      <div
        className="min-h-[50%] w-full animate-slide-up rounded-t-[20px] bg-white p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-2">
          <input
            className="flex h-9 grow rounded-[10px] bg-[#E6E6E6] px-[11px] py-2"
            ref={inputRef}
          />
          <TagPlusIcon onClick={handleAddTag} />
        </div>
        <Spacing size={1} />
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <TagItem key={tag} tagLabel={tag} onClick={() => handleDeleteTag(tag)} />
          ))}
        </div>
      </div>
    </div>
  );
};
