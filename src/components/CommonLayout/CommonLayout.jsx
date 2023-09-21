import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

const CommonLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home<span>.</span>
              </Link>
            </li>
            <li>
              <Link to="/movies">
                Movies<span>.</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default CommonLayout;
