import PrevClickIcon from '@/assets/prevClick.svg?react';
interface TopBarProps {
  title: string;
  children?: React.ReactNode;
  size: number;
  handlePrevClick: () => void;
}
export const TopBarControl = ({ title, children, size, handlePrevClick }: TopBarProps) => {
  return (
    <div className="mb-[3rem] flex h-[2.1rem] w-full flex-row items-center gap-[1rem]">
      <PrevClickIcon className="" onClick={handlePrevClick}></PrevClickIcon>
      <div
        style={{
          width: size + 'rem',
        }}
        className="h-full text-xl font-bold"
      >
        {title}
      </div>
      {children}
    </div>
  );
};
