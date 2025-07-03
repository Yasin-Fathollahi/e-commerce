import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root.jsx';
import HomePage from './pages/Home.jsx';
import ShopPage, { loader as shopLoader } from './pages/Shop.jsx';
import ProductDetailsPage, {
  loader as productDetailsLoader,
} from './pages/ProductDetails.jsx';
import ErrorPage from './pages/Error.jsx';
import NavigationRootLayout from './pages/NavigationRoot.jsx';
import CartPage from './pages/Cart.jsx';
import AuthPage, { action as authAction } from './pages/Auth.jsx';
import { tokenLoader } from './util/auth.js';
import OrdersPage from './pages/Orders.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        element: <NavigationRootLayout />,
        children: [
          { path: 'shop', element: <ShopPage />, loader: shopLoader },
          {
            path: 'shop/:productId',
            element: <ProductDetailsPage />,
            loader: productDetailsLoader,
          },
          { path: 'cart', element: <CartPage /> },
          {
            path: 'auth',
            element: <AuthPage />,
            action: authAction,
          },
          { path: '/orders', element: <OrdersPage /> },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
