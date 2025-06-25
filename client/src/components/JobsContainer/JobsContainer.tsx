import Wrapper from './Wrapper';
import { useAllJobsContext } from '../../pages/AllJobs';
import Job from '../Job';

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs } = data;

  if (!jobs.length) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="jobs">
        {data.jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
