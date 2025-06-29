import { Form, useOutletContext } from 'react-router-dom';
import Wrapper from './Wrapper';
import { FormRow, FormRowSelect, SubmitBtn } from '../../components';
import { JOB_STATUS, JOB_TYPE } from '../../../../utils/constants';
import type { DashboardOutletContext } from '../../interfaces';

const AddJob = () => {
  const { user }: DashboardOutletContext = useOutletContext();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow type="text" labelText="job location" name="jobLocation" defaultValue={user.location} />
          <FormRowSelect
            labelText="job status"
            name="jobStatus"
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            labelText="job type"
            name="jobType"
            defaultValue={JOB_TYPE.FULL_TIME}
            list={Object.values(JOB_TYPE)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;
