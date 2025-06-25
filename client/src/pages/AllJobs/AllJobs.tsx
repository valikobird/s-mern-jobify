import { useLoaderData } from 'react-router-dom';
import { JobsContainer, SearchContainer } from '../../components';
import { AllJobsContext } from './context';

const AllJobs = () => {
  const { data } = useLoaderData();

  return (
    <AllJobsContext.Provider value={{ data }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export default AllJobs;
