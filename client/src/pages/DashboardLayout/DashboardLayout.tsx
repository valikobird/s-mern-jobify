import { Outlet, useNavigate, useNavigation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Wrapper from './Wrapper';
import { BigSidebar, Loading, Navbar, SmallSidebar } from '../../components';
import { DashboardContext } from './Context';
import checkDefaultTheme from '../../utils/theme';
import customFetch from '../../utils/customFetch';
import { userQuery } from './loader';
import { useQuery } from '@tanstack/react-query';

const DashboardLayout = ({ queryClient }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(checkDefaultTheme());
  const [isAuthError, setIsAuthError] = useState<boolean>(false);

  const {
    data: { user },
  } = useQuery(userQuery);

  const toggleDarkTheme = (): void => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);

    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme.toString());
  };

  const toggleSidebar = (): void => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async (): Promise<void> => {
    navigate('/');
    await customFetch.get('/auth/logout');
    await queryClient.invalidateQueries();
    toast.success('Logged out');
  };

  customFetch.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        setIsAuthError(true);
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (isAuthError) {
      logoutUser();
    }
  }, [isAuthError, logoutUser]);

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">{isPageLoading ? <Loading /> : <Outlet context={{ user }} />}</div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export default DashboardLayout;
