import LoginPage from 'containers/Auth/Login';
import RegisterPage from 'containers/Auth/Register';
import { Space } from 'containers/Space';
import { ProfilePage } from 'containers/Profile';
import { Route } from 'react-router-dom';
import { TPublicRoutes } from 'routes/interface';
import { SpaceDetail } from 'containers/SpaceDetail';
import BookingSpace from 'containers/Space/BookingSpace';

export const PUBLIC_ROUTES: TPublicRoutes = [
  {
    path: '/',
    element: <Space />,
    exact: true,
  },
  {
    path: '/space/:id',
    element: <SpaceDetail />,
    exact: true,
  },
  {
    path: '/login',
    element: <LoginPage />,
    exact: true,
  },
  {
    path: '/spaces/booking',
    element: <BookingSpace />,
    exact: true,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    exact: true,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    exact: true,
  },
];

const publicRoutes = () => PUBLIC_ROUTES.map((route) => <Route {...route} key={route.path} />);

export default publicRoutes;
