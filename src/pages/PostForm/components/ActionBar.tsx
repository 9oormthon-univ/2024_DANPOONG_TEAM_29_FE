import { useEffect, useState } from 'react';

import { TagBottomSheet } from './TagBottomSheet';
import { TagItem } from './TagItem';
import ImgIcon from '../../../assets/img.svg?react';
import TagIcon from '../../../assets/tag.svg?react';

interface ActionBarProps {
  tagList: string[];
  onChangeImage: React.ChangeEventHandler<HTMLInputElement>;
  onChangeTag: (tags: string[] | null) => void;
}

export const ActionBar = ({ tagList, onChangeImage, onChangeTag }: ActionBarProps) => {
  const [tags, setTags] = useState(tagList);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const handleBottomSheetVisibility = () => {
    setIsBottomSheetVisible((prev) => !prev);
  };

  const handleAddTags = (target: string[]) => {
    setTags((prev) => [...prev, ...target]);
  };

  const handleDeleteTag = (target: string) => {
    setTags((prev) => prev.filter((tag) => tag !== target));
  };

  useEffect(() => {
    onChangeTag(tags.length ? tags : null);
  }, [tags]);

  return (
    <div className="flex justify-between">
      <div className="flex">
        <label>
          <ImgIcon className="mr-4" />
          <input
            type="file"
            accept=".jpg, .jpeg, .png, .webp, .avif"
            style={{ display: 'none' }}
            onChange={onChangeImage}
          />
        </label>
        <TagIcon onClick={handleBottomSheetVisibility} />
      </div>
      <div className="flex gap-1">
        {tags.map((tag) => (
          <TagItem key={tag} tagLabel={tag} onClick={() => handleDeleteTag(tag)} />
        ))}
      </div>
      {isBottomSheetVisible && (
        <TagBottomSheet onAddTags={handleAddTags} onClose={handleBottomSheetVisibility} />
      )}
    </div>
  );
};
