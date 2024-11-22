import { Outlet, useNavigate } from 'react-router-dom';

import HomeIcon from '@/assets/home.svg?react';
import WritePetitionIcon from '@/assets/petition/writePetition.svg?react';
import WriteStoryIcon from '@/assets/writeStory.svg?react';

export const LayoutWithNavigation = () => {
  return (
    <div className="bg-gray-100 flex h-screen w-screen flex-col items-center justify-center">
      <div className="relative flex h-full w-full max-w-[400px] justify-center overflow-scroll rounded-lg bg-white p-6 shadow-md [&::-webkit-scrollbar]:hidden">
        <div className="h-fit w-full pb-[110px]">
          <Outlet />
        </div>
        <BottomNavigation />
      </div>
    </div>
  );
};

export const BottomNavigation = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 flex h-[52px] w-[237px] items-center justify-between rounded-[56px] border border-white bg-[#73ABF5] px-8">
      <HomeIcon className="cursor-pointer" onClick={() => navigate('/')} />
      <WriteStoryIcon className="cursor-pointer" onClick={() => navigate('/post/create')} />
      <WritePetitionIcon className="cursor-pointer" onClick={() => navigate('/petition/create')} />
    </div>
  );
};
