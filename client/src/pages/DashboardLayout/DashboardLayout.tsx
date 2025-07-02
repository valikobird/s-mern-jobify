import { Outlet, useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Wrapper from './Wrapper';
import { BigSidebar, Loading, Navbar, SmallSidebar } from '../../components';
import { DashboardContext } from './Context';
import checkDefaultTheme from '../../utils/theme';
import customFetch from '../../utils/customFetch';

const DashboardLayout = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(checkDefaultTheme());

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
    toast.success('Logged out');
  };

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
