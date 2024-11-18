import { QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SocialKakaoLogin } from './components/login/SocialKakaoLogin';
import { Auth } from './pages/Auth';
import { Feed } from './pages/Feed';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { PetitionDetail } from './pages/PetitionDetail';
import { PetitionFeed } from './pages/PetitionFeed';
import { PetitionForm } from './pages/PetitionForm';
import { PostDetail } from './pages/PostDetail';
import { PostForm } from './pages/PostForm';
import { queryClient } from './services/TanstackQueryStore';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <SocialKakaoLogin />,
      },
      { path: 'auth', element: <Auth /> },
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
