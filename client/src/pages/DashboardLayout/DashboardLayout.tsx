import { Outlet } from 'react-router-dom';
import Wrapper from './Wrapper';
import { BigSidebar, Navbar, SmallSidebar } from '../../components';
import { useState } from 'react';
import { DashboardContext } from './Context';

const DashboardLayout = () => {
  const user = { name: 'valiko' };

  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleDarkTheme = (): void => {
    console.log('toggle dark theme');
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
