import Wrapper from './Wrapper';
import { Form, useLoaderData } from 'react-router-dom';
import { FormRow, FormRowSelect, SubmitBtn } from '../../components';
import { JOB_STATUS, JOB_TYPE } from '../../../../utils/constants';
import { useQuery } from '@tanstack/react-query';
import { getJobQuery } from './loader';

const EditJob = () => {
  const id = useLoaderData();
  const {
    data: { job },
  } = useQuery(getJobQuery(id));

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" defaultValue={job.position} />
          <FormRow type="text" name="company" defaultValue={job.company} />
          <FormRow type="text" name="jobLocation" labelText="job location" defaultValue={job.jobLocation} />
          <FormRowSelect
            name="jobStatus"
            labelText="job status"
            list={Object.values(JOB_STATUS)}
            defaultValue={job.jobStatus}
          />
          <FormRowSelect
            name="jobType"
            labelText="job type"
            list={Object.values(JOB_TYPE)}
            defaultValue={job.jobType}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditJob;
