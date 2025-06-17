export interface ActionProps {
  request: Request;
}

export interface User {
  name: string;
  email: string;
  lastName: string;
  location: string;
  role: string;
}

export interface DashboardOutletContext {
  user: User;
}
