import RightIcon from '@/assets/right.svg?react';

export const Panel = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <div
      className="flex h-[108px] cursor-pointer items-center justify-between rounded-[10px] bg-[#F7F7F7] py-5 pl-2 pr-6"
      onClick={onClick}
    >
      <div className="flex items-center">{children}</div>
      <RightIcon />
    </div>
  );
};
