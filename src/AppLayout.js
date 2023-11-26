import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { NavLink, Outlet } from 'react-router-dom';
import { Layout } from './Layout';

export const AppLayout = () => {
  return (
    <Layout>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Suspense fallback={<div>LOADING PAGE...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <footer>FOOTER</footer>

      <GlobalStyle />
      <Toaster />
    </Layout>
  );
};
