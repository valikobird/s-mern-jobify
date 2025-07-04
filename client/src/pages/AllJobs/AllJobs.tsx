import { useLoaderData } from 'react-router-dom';
import { JobsContainer, SearchContainer } from '../../components';
import { AllJobsContext } from './context';
import { useQuery } from '@tanstack/react-query';
import { allJobsQuery } from './loader';

const AllJobs = () => {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allJobsQuery(searchValues));

  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export default AllJobs;
