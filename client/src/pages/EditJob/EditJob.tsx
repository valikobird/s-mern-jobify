import Wrapper from './Wrapper';
import { Form, useLoaderData, useNavigation } from 'react-router-dom';
import { FormRow, FormRowSelect } from '../../components';
import { JOB_STATUS, JOB_TYPE } from '../../../../utils/constants';

const EditJob = () => {
  const { job } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

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
          <button type="submit" className="btn btn-block form-btn" disabled={isSubmitting}>
            {isSubmitting ? 'submitting...' : 'submit'}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditJob;
