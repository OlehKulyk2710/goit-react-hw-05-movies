import { Outlet } from 'react-router-dom';
import { Header, Main } from 'components';

export const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
