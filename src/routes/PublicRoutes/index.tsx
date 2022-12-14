import LoginPage from 'containers/Auth/Login';
import RegisterPage from 'containers/Auth/Register';
import { Space } from 'containers/Space';
import { ProfilePage } from 'containers/Profile';
import { Route } from 'react-router-dom';
import { TPublicRoutes } from 'routes/interface';
import { SpaceDetail } from 'containers/SpaceDetail';
import BookingSpace from 'containers/Space/BookingSpace';
import { BookingConfirm } from 'containers/Space/BookingSpace/components/BookingComfirm';
import { BookingHistory } from 'containers/Space/BookingHistory';
import { AddSpace } from 'containers/Space/AddSpace';
import { YourSpaceList } from 'containers/Space/YourSpace';
import { YourSpaceDetail } from 'containers/Space/YourSpaceDetail';
import { PaymentSpace } from 'containers/Space/PaymentSpace';
import { BookingManagement } from 'containers/Space/BookingManagement';

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
    path: '/space/booking',
    element: <BookingSpace />,
    exact: true,
  },
  {
    path: '/space/checkout',
    element: <BookingConfirm />,
    exact: true,
  },
  
  {
    path: '/booking/history',
    element: <BookingHistory />,
    exact: true,
  },
  {
    path: '/booking/management',
    element: <BookingManagement />,
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
  {
    path: '/add-space',
    element: <AddSpace />,
    exact: true,
  },
  {
    path: '/your-space',
    element: <YourSpaceList />,
    exact: true,
  },
  {
    path: '/your-space/:id/show',
    element: <YourSpaceDetail />,
    exact: true,
  },
  {
    path: '/your-space/:id/payment',
    element: <PaymentSpace />,
    exact: true,
  },
];

const publicRoutes = () => PUBLIC_ROUTES.map((route) => <Route {...route} key={route.path} />);

export default publicRoutes;
