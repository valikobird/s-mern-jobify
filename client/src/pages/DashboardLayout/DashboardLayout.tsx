import { Outlet } from 'react-router-dom';
import Wrapper from './Wrapper';
import { BigSidebar, Navbar, SmallSidebar } from '../../components';
import { useState } from 'react';
import { DashboardContext } from './Context';
import checkDefaultTheme from '../../utils/theme';

const DashboardLayout = () => {
  const user = { name: 'valiko' };

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
    console.log('logout');
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
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export default DashboardLayout;
