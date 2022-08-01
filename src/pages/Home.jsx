import { Outlet } from 'react-router-dom';
import { Header, Main, Container } from 'components';

export const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
};
