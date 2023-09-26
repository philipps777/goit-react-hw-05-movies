import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Wrapper, Header, Navigation, Button } from './SharedLayout .styled';

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
    // <Wrapper>
    //   <HeaderContainer>
    //     <nav>
    //       <Container>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/movies">Movies</Link>
    //         </li>
    //       </Container>
    //     </nav>
    //   </HeaderContainer>
    //   <Suspense fallback={<div>Loading page...</div>}>
    //     <Outlet />
    //   </Suspense>
    // </Wrapper>
  );
};

export default SharedLayout;
