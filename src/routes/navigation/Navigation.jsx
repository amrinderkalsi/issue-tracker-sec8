import { Outlet, Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      {' | '}
      <Link to="/about">About</Link>
      <Outlet />
    </div>
  );
}

export default Navigation;
