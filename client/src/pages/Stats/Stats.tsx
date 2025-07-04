import { ChartsContainer, StatsContainer } from '../../components';
import { useQuery } from '@tanstack/react-query';
import { statsQuery } from './loader';

const Stats = () => {
  const {
    data: { stats, monthlyApplications },
  } = useQuery(statsQuery);

  return (
    <>
      <StatsContainer stats={stats} />
      {monthlyApplications?.length > 1 && <ChartsContainer data={monthlyApplications} />}
    </>
  );
};

export default Stats;
