import { Outlet, useLocation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
export default function NavigationRootLayout() {
  const location = useLocation();
  const isShop = location.pathname === '/shop';

  return (
    <div className={isShop ? '' : 'h-screen flex flex-col'}>
      <MainNavigation />
      <Outlet />
    </div>
  );
}
