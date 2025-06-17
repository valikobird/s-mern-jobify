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
import { registerAction } from './pages/Register';
import checkDefaultTheme from './utils/theme';

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
      { path: 'login', element: <Login /> },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [{ index: true, element: <AddJob /> }],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
