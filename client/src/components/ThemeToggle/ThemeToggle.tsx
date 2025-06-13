import Wrapper from './Wrapper';
import { useDashboardContext } from '../../pages/DashboardLayout';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();

  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;
