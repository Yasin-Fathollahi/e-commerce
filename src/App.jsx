import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root.jsx';
import HomePage from './pages/Home.jsx';
import ShopPage, { loader as shopLoader } from './pages/Shop.jsx';
import ProductDetailsPage, {
  loader as productDetailsLoader,
} from './pages/ProductDetails.jsx';
import ErrorPage from './pages/Error.jsx';
import NavigationRootLayout from './pages/NavigationRoot.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'shop',
        element: <NavigationRootLayout />,

        children: [
          { index: true, element: <ShopPage />, loader: shopLoader },
          {
            path: ':productId',
            element: <ProductDetailsPage />,
            loader: productDetailsLoader,
          },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
