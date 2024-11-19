import DeleteIcon from '../../../assets/delete.svg?react';

export const TagItem = ({
  tagLabel,
  onClick,
}: {
  tagLabel: string;
  onClick: (tag: string) => void;
}) => {
  return (
    <div className="relative pr-[5px] pt-[6px]">
      <span className="bg-primary flex h-[22px] items-center rounded-full border px-2 text-xs text-white">
        #{tagLabel}
      </span>
      <DeleteIcon
        className="absolute right-0 top-0 z-0"
        onClick={() => {
          onClick(tagLabel);
        }}
      />
    </div>
  );
};
