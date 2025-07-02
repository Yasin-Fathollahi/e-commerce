import { NavLink, useLocation } from 'react-router-dom';

const magnifierIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);
const cartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    />
  </svg>
);

const profileIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    />
  </svg>
);

const chevDownIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

export default function MainNavigation({ homePageActive = false }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isShop = location.pathname === '/shop';
  const isCart = location.pathname === '/cart';
  const isProfile = location.pathname === '/profile';
  const isSearch = location.pathname === '/search';
  return (
    <>
      <nav className="flex justify-between pt-4 px-4 font-playfair">
        <ul className="flex gap-4">
          {isHome && (
            <li>
              <NavLink to="/" className="text-xl font-bold hover:underline">
                CASTELLION
              </NavLink>
            </li>
          )}
          <li>
            {!isShop && (
              <NavLink to="/shop" className="text-xl hover:underline">
                SHOP
              </NavLink>
            )}
          </li>
        </ul>
        {!isHome && (
          <NavLink to="/" className="text-4xl font-bold tracking-wide">
            CASTELLION
          </NavLink>
        )}
        <ul className="flex gap-4">
          {!isCart && (
            <li>
              <NavLink to="/cart">{cartIcon}</NavLink>
            </li>
          )}
          {!isProfile && (
            <li>
              <NavLink to="/profile">{profileIcon}</NavLink>
            </li>
          )}
          {!isSearch && (
            <li>
              <NavLink to="search">{magnifierIcon}</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
