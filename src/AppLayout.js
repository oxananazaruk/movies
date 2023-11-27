import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { Outlet } from 'react-router-dom';
import { Navigation, NavigationList, MainLink } from './AppLayout.styled';

export const AppLayout = () => {
  return (
    <>
      <Navigation>
        <nav>
          <NavigationList>
            <li>
              <MainLink to="/">Home</MainLink>
            </li>
            <li>
              <MainLink to="/movies">Movies</MainLink>
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
