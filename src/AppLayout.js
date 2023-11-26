import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { NavLink, Outlet } from 'react-router-dom';
import { Navigation, NavigationList } from './AppLayout.styled';

export const AppLayout = () => {
  return (
    <>
      <Navigation>
        <nav>
          <NavigationList>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </NavigationList>
        </nav>
      </Navigation>

      <main>
        <Suspense fallback={<div>LOADING PAGE...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
      <Toaster />
    </>
  );
};
