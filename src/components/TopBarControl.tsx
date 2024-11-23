import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import PrevClickIcon from '@/assets/prevClick.svg?react';
interface TopBarProps {
  title?: string;
  size: number;
  children?: React.ReactNode;
}

export const TopBarControl = ({ title, size, children }: TopBarProps) => {
  const navigate = useNavigate();
  const handlePrevClick = useCallback(() => {
    navigate('../');
  }, [navigate]);
  return (
    <>
      <div className="flex h-[2.1rem] flex-row items-center">
        <PrevClickIcon className="h-4 w-4 cursor-pointer" onClick={handlePrevClick}></PrevClickIcon>
        <span
          style={{
            width: size + 'rem',
          }}
          className="text-xl font-bold"
        >
          {title}
        </span>
        {children}
      </div>
    </>
  );
};
