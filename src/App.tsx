import { Suspense } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { LayoutWithNavigation } from './components/layout/LayoutWithNavigation';
import { MainLayout } from './components/layout/MainLayout';
import { Auth } from './pages/Auth/Auth';
import { LanguageSelection } from './pages/Auth/LanguageSelection';
import { SignUpForm } from './pages/Auth/SignUpForm';
import { UserInfo } from './pages/Auth/UserInfo';
import { Feed } from './pages/Feed/Feed';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound';
import { PetitionComplete } from './pages/Petition/PetitionComplete';
import { PetitionDetail } from './pages/Petition/PetitionDetail';
import { PetitionFeed } from './pages/Petition/PetitionFeed';
import { PetitionForm } from './pages/Petition/PetitionForm';
import { PetitionLayout } from './pages/Petition/PetitionLayout';
import { PostDetail } from './pages/PostDetail/PostDetail';
import { PostForm } from './pages/PostForm/PostForm';
import { queryClient } from './services/TanstackQueryStore';

import '@/utils/i18n';

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
        path: 'post/create',
        element: <PostForm />,
      },
      {
        path: 'petition',
        element: <PetitionLayout />,
        children: [
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
      {
        path: 'petition/complete',
        element: <PetitionComplete />,
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
        path: 'petition',
        element: <PetitionLayout />,
        children: [{ path: 'feed', element: <PetitionFeed /> }],
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        fallbackRender={() => {
          return <div>fallback</div>;
        }}
      >
        <Suspense fallback={<div>loading</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};

export default App;
