import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-100">
      <div className="relative h-full w-full max-w-[400px] rounded-lg bg-white p-6 shadow-md">
        <Outlet />
      </div>
    </div>
  );
};
