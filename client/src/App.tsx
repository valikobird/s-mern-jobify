import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, Landing } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [{ index: true, element: <Landing /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
