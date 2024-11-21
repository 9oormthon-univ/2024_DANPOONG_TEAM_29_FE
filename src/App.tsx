import { QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { LayoutWithNavigation } from './components/layout/LayoutWithNavigation';
import { MainLayout } from './components/layout/MainLayout';
import { Auth } from './pages/Auth';
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
  {
    path: '/',
    element: <LayoutWithNavigation />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
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
        path: 'petition/feed',
        element: <PetitionFeed />,
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
