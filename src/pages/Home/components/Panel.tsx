import RightIcon from '../../../assets/right.svg?react';

export const Panel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-[108px] items-center justify-between rounded-[10px] bg-[#F7F7F7] py-5 pl-2 pr-6">
      <div className="flex items-center">{children}</div>
      <RightIcon />
    </div>
  );
};
