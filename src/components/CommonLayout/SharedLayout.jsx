import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Wrapper, Header, Navigation, Button } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header>
        <Navigation>
          <NavLink to="/">
            <Button>Home</Button>
          </NavLink>
          <NavLink to="/movies">
            <Button>Movies</Button>
          </NavLink>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
