import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './common/pages/Root/Root';
import HomePage from './common/pages/Home/HomePage';
import ProductsPage from './features/products/page/ProductsPage';
import ErrorPage from './common/pages/Error/ErrorPage';
import ProductPage from './features/products/components/ProductPage';
import AddProductForm from './features/products/components/AddProductForm';
import UpdateProductForm from './features/products/components/UpdateProductForm';
import CategoriesPage from './features/categories/page/CategoriesPage';
import AddCategoryForm from './features/categories/components/AddCategoryForm';
import UsersPage from './features/users/pages/UsersPage';
import AddUserForm from './features/users/components/AddUserForm';
import UpdateUserForm from './features/users/components/UpdateUserForm';
import Signup from './features/users/pages/Signup';
import Login from './features/users/pages/Login';
import Profile from './features/users/pages/Profile';
import Checkout from './features/checkout/pages/CheckoutPage';
import PaymentPage from './features/payment/page/PaymentPage';

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
        },
        {
          path: 'categories/addCategory',
          element: <AddCategoryForm />
        },
        {
          path: 'categories/updateCategory/:id',
          element: <UpdateProductForm />
        },
        {
          path: 'payment',
          element: <PaymentPage />
        },
        {
          path: 'checkout',
          element: <Checkout />
        },
        {
          path: 'signup',
          element: <Signup />
        },
        {
          path: 'login',
          element: <Login />
        },
      {
        path:'users/profile/:id',
        element: <Profile />
      },
      {
        path: 'users',
        element: <UsersPage />,
      },
      {
        path: 'users/addUser',
        element: <AddUserForm />
      },
      {
        path: 'users/updateUser/:id',
        element: <UpdateUserForm />
      },
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