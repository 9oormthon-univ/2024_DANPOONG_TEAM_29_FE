import PrevClickIcon from '@/assets/prevClick.svg?react';

interface TopBarProps {
  title: string;
  size: number;
  handlePrevClick: () => void;
}

export const TopBarControl = ({ title, size, handlePrevClick }: TopBarProps) => {
  return (
    <>
      <div className="flex h-[2.1rem] flex-row items-center">
        <PrevClickIcon className="w-[1.5rem]" onClick={handlePrevClick}></PrevClickIcon>
        <span
          style={{
            width: size + 'rem',
          }}
          className="text-xl font-bold"
        >
          {title}
        </span>
      </div>
    </>
  );
};
