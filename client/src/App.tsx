import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  AddJob,
  Admin,
  AllJobs,
  DashboardLayout,
  EditJob,
  Error,
  HomeLayout,
  Landing,
  Login,
  Profile,
  Register,
  Stats,
} from './pages';
import checkDefaultTheme from './utils/theme';

// actions
import { registerAction } from './pages/Register';
import { loginAction } from './pages/Login';
import { addJobAction } from './pages/AddJob';
import { editJobAction } from './pages/EditJob';
import { deleteJobAction } from './pages/DeleteJob';
import { profileAction } from './pages/Profile';

// loaders
import { dasboardLayoutLoader } from './pages/DashboardLayout';
import { allJobsLoader } from './pages/AllJobs';
import { editJobLoader } from './pages/EditJob';
import { adminLoader } from './pages/Admin';
import { statsLoader } from './pages/Stats';

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
          { path: 'edit-job/:id', element: <EditJob />, loader: editJobLoader, action: editJobAction },
          { path: 'delete-job/:id', action: deleteJobAction },
          { path: 'admin', element: <Admin />, loader: adminLoader },
          { path: 'profile', element: <Profile />, action: profileAction },
          { path: 'stats', element: <Stats />, loader: statsLoader },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
