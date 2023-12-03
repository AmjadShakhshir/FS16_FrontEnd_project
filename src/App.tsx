import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root/Root';
import HomePage from './pages/Home/HomePage';
import ProductsPage from './pages/Products/ProductsPage';
import ErrorPage from './pages/Error/ErrorPage';
import ProductPage from './pages/Product/ProductPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { 
          path: '/',
          element: <HomePage />
        },
        {
          path: 'products',
          element: <ProductsPage />
        },
        {
          path: 'products/:id',
          element: <ProductPage />,
        },
      //   {
      //     path: 'register',
      //     element: <RegisterPage />
      //   },
      //   {
      //     path: 'login',
      //     element: <LoginPage />
      //   },
      // {
      //   path:'profile',
      //   element: <ProfilePage />
      // },
      // {
      //   path: 'users',
      //   element: <UsersPage />,
      // },
      ]
    },
      {
        path: '*',
        element: <ErrorPage />
      }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App