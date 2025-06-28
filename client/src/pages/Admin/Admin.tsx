import Wrapper from './Wrapper';
import { useLoaderData } from 'react-router-dom';
import { StatItem } from '../../components';
import { FaCalendarCheck, FaSuitcaseRolling } from 'react-icons/fa';

const Admin = () => {
  const { users, jobs } = useLoaderData();

  return (
    <Wrapper>
      <StatItem title="current users" count={users} color="#e9b949" bgcolor="#fcefc7" icon={<FaSuitcaseRolling />} />
      <StatItem title="total jobs" count={jobs} color="#647acb" bgcolor="#e0e8f9" icon={<FaCalendarCheck />} />
    </Wrapper>
  );
};

export default Admin;
