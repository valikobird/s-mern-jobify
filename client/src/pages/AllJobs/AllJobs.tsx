import { useLoaderData } from 'react-router-dom';
import { JobsContainer, SearchContainer } from '../../components';
import { AllJobsContext } from './context';

const AllJobs = () => {
  const { data, searchValues } = useLoaderData();

  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export default AllJobs;
