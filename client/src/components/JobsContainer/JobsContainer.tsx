import Wrapper from './Wrapper';
import { useAllJobsContext } from '../../pages/AllJobs';
import Job from '../Job';
import PageBtnContainer from '../PageBtnContainer';

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs, totalJobs, numberOfPages } = data;

  if (!jobs.length) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className="jobs">
        {data.jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numberOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
