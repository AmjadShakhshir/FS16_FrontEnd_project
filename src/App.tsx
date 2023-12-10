import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './common/pages/Root/Root';
import HomePage from './common/pages/Home/HomePage';
import ProductsPage from './features/products/pages/ProductsPage';
import ErrorPage from './common/pages/Error/ErrorPage';
import ProductPage from './features/products/components/ProductPage';
import AddProductForm from './features/products/components/AddProductForm';
import UpdateProductForm from './features/products/components/UpdateProductForm';
import CategoriesPage from './features/categories/pages/CategoriesPage';

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
          element: <ProductPage />
        },
        {
          path: 'addProduct',
          element: <AddProductForm />
        },
        {
          path: 'updateProduct/:id',
          element: <UpdateProductForm />
        },
        {
          path: 'categories',
          element: <CategoriesPage />
        }
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