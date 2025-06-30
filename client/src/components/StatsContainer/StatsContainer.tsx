import Wrapper from './Wrapper';
import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from 'react-icons/fa';
import StatItem from '../StatItem';

interface StatsContainerProps {
  stats: { pending: number; interview: number; declined: number };
}

const StatsContainer = ({ stats }: StatsContainerProps) => {
  const statItems = [
    {
      title: 'pending applications',
      count: stats?.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#f59e0b',
      bgcolor: '#fef3c7',
    },
    {
      title: 'interviews scheduled',
      count: stats?.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bgcolor: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: stats?.declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bgcolor: '#ffeeee',
    },
  ];
  return (
    <Wrapper>
      {statItems.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
