import { Outlet } from 'react-router-dom';
import { Header, Main } from 'components';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Toaster />
    </>
  );
};
