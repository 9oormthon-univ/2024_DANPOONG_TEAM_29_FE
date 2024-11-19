import { QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Auth } from './pages/Auth';
import { Feed } from './pages/Feed';
import { Home } from './pages/Home';
import LanguageSelection from './pages/LanguageSelection';
import { MainLayout } from './pages/MainLayout';
import { NotFound } from './pages/NotFound';
import { PetitionDetail } from './pages/PetitionDetail';
import { PetitionFeed } from './pages/PetitionFeed';
import { PetitionForm } from './pages/PetitionForm';
import { PostDetail } from './pages/PostDetail';
import { PostForm } from './pages/PostForm/PostForm';
import { SignUpForm } from './pages/SignUpForm';
import { UserInfo } from './pages/UserInfo';
import { queryClient } from './services/TanstackQueryStore';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'auth',
        children: [
          { index: true, element: <Auth /> },
          { path: 'signup', element: <SignUpForm /> },
          { path: 'language', element: <LanguageSelection /> },
          { path: 'userinfo', element: <UserInfo /> },
        ],
      },
      {
        path: 'feed',
        element: <Feed />,
      },

      {
        path: 'post/:postId',
        element: <PostDetail />,
      },
      {
        path: 'post/create',
        element: <PostForm />,
      },
      {
        path: 'petition/feed',
        element: <PetitionFeed />,
      },
      {
        path: 'petition/:petitionId',
        element: <PetitionDetail />,
      },
      {
        path: 'petition/create',
        element: <PetitionForm />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
