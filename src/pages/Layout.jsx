import { Outlet } from 'react-router-dom';
import { Header, Main } from 'components';
import { Toaster } from 'react-hot-toast';

const Layout = () => {
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

export default Layout;
