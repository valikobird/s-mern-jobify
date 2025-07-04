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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorElement } from './components';

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
      { path: 'login', element: <Login />, action: loginAction(queryClient) },
      {
        path: 'dashboard',
        element: <DashboardLayout queryClient={queryClient} />,
        loader: dasboardLayoutLoader(queryClient),
        children: [
          { index: true, element: <AddJob />, action: addJobAction(queryClient), errorElement: <ErrorElement /> },
          {
            path: 'all-jobs',
            element: <AllJobs />,
            loader: allJobsLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: 'edit-job/:id',
            element: <EditJob />,
            loader: editJobLoader(queryClient),
            action: editJobAction(queryClient),
            errorElement: <ErrorElement />,
          },
          { path: 'delete-job/:id', action: deleteJobAction(queryClient), errorElement: <ErrorElement /> },
          { path: 'admin', element: <Admin />, loader: adminLoader, errorElement: <ErrorElement /> },
          { path: 'profile', element: <Profile />, action: profileAction(queryClient), errorElement: <ErrorElement /> },
          { path: 'stats', element: <Stats />, loader: statsLoader(queryClient), errorElement: <ErrorElement /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
