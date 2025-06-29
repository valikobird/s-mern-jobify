import { useState } from 'react';
import { useDashboardContext } from '../../pages/DashboardLayout';
import Wrapper from './Wrapper';
import { FaCaretDown, FaUserCircle } from 'react-icons/fa';

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState<boolean>(false);
  const { user, logoutUser } = useDashboardContext();

  const handleToggleClick = () => {
    setShowLogout(!showLogout);
  };

  return (
    <Wrapper>
      <button type="button" className="btn logout-btn" onClick={handleToggleClick}>
        {user.avatar ? <img src={user.avatar} alt="avatar" className="img" /> : <FaUserCircle />}
        {user?.name}
        <FaCaretDown />
      </button>
      <div className={`dropdown ${showLogout ? 'show-dropdown' : ''}`}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};

export default LogoutContainer;
