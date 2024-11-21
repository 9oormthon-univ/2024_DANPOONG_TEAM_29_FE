import { QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Auth } from './pages/Auth/Auth';
import LanguageSelection from './pages/Auth/LanguageSelection';
import { SignUpForm } from './pages/Auth/SignUpForm';
import { UserInfo } from './pages/Auth/UserInfo';
import { Feed } from './pages/Feed';
import { Home } from './pages/Home/Home';
import { MainLayout } from './pages/MainLayout';
import { NotFound } from './pages/NotFound';
import { PetitionDetail } from './pages/Petition/PetitionDetail';
import { PetitionFeed } from './pages/Petition/PetitionFeed';
import { PetitionForm } from './pages/Petition/PetitionForm';
import { PetitionLayout } from './pages/Petition/PetitionLayer';
import { PostDetail } from './pages/PostDetail';
import { PostForm } from './pages/PostForm/PostForm';
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
        path: 'petition',
        element: <PetitionLayout />,
        children: [
          { path: 'feed', element: <PetitionFeed /> },
          {
            path: ':petitionId',
            element: <PetitionDetail />,
          },
        ],
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
