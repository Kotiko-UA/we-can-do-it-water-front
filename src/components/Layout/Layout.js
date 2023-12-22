// import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <li>
            <NavLink to="/">I am Logo 💧</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign in 🧑</NavLink>
          </li>
        </nav>
      </header>

      {/* <Suspense>
        <Outlet />
      </Suspense> */}
    </div>
  );
};
