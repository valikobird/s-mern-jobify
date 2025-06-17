import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  AddJob,
  DashboardLayout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Register,
} from './pages';
import checkDefaultTheme from './utils/theme';

// actions
import { registerAction } from './pages/Register';
import { loginAction } from './pages/Login';

// loaders
import { dasboardLayoutLoader } from './pages/DashboardLayout';

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      { path: 'login', element: <Login />, action: loginAction },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: dasboardLayoutLoader,
        children: [{ index: true, element: <AddJob /> }],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
