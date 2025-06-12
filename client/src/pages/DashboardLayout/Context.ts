import type { User } from '../../globalTypes';
import { type Context, createContext, useContext } from 'react';

type DashboardContextType = {
  user?: User;
  showSidebar?: boolean;
  isDarkTheme?: boolean;
  toggleDarkTheme?: () => void;
  toggleSidebar?: () => void;
  logoutUser?: () => void;
};

export const DashboardContext: Context<DashboardContextType> =
  createContext<DashboardContextType>({});

export const useDashboardContext = () => useContext(DashboardContext);
