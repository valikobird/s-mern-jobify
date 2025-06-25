import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AddJob, AllJobs, DashboardLayout, Error, HomeLayout, Landing, Login, Register } from './pages';
import checkDefaultTheme from './utils/theme';

// actions
import { registerAction } from './pages/Register';
import { loginAction } from './pages/Login';
import { addJobAction } from './pages/AddJob';

// loaders
import { dasboardLayoutLoader } from './pages/DashboardLayout';
import { allJobsLoader } from './pages/AllJobs';

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
        children: [
          { index: true, element: <AddJob />, action: addJobAction },
          { path: 'all-jobs', element: <AllJobs />, loader: allJobsLoader },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
