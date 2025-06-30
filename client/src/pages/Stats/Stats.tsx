import { useLoaderData } from 'react-router-dom';
import { ChartsContainer, StatsContainer } from '../../components';

const Stats = () => {
  const { stats, monthlyApplications } = useLoaderData();

  return (
    <>
      <StatsContainer stats={stats} />
      {monthlyApplications?.length > 1 && <ChartsContainer data={monthlyApplications} />}
    </>
  );
};

export default Stats;
