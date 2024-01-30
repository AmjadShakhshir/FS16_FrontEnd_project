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
import ProtectedRoute from './common/routes/protectedRoute';
import PaymentConfirmationPage from './features/payment/page/PaymentConfirmationPage';
import About from './common/pages/About/About';
import ContactUs from './common/pages/Contact/ContactUs';

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
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <ContactUs />
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
          element: <ProtectedRoute isAdmin={true} element={<AddProductForm />} />
        },
        {
          path: 'updateProduct/:id',
          element: <ProtectedRoute isAdmin={true} element={<UpdateProductForm />} />
        },
        {
          path: 'categories',
          element: <ProtectedRoute isAdmin={true} element={<CategoriesPage />} />
        },
        {
          path: 'categories/addCategory',
          element: <ProtectedRoute isAdmin={true} element={<AddCategoryForm />} />
        },
        {
          path: 'categories/updateCategory/:id',
          element: <ProtectedRoute isAdmin={true} element={<UpdateProductForm />} />
        },
        {
          path: 'checkout',
          element: <ProtectedRoute element={<Checkout />} />
        },
        {
          path: 'confirmation',
          element: <ProtectedRoute element={<PaymentConfirmationPage />} />
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
          element: <ProtectedRoute element={<Profile />} />
      },
      {
        path: 'users',
        element: <UsersPage />,
      },
      {
        path: 'users/addUser',
        element: <ProtectedRoute isAdmin={true} element={<AddUserForm />} />
      },
      {
        path: 'users/updateUser/:id',
        element: <ProtectedRoute isAdmin={true} element={<UpdateUserForm />} />
      },
      {
        path: 'checkout',
        element: <ProtectedRoute element={<Checkout />} />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: '*',
        element: <ErrorPage />
      }]
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App