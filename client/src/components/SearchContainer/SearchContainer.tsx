import Wrapper from './Wrapper';
import { Form, Link, useSubmit } from 'react-router-dom';
import FormRow from '../FormRow';
import FormRowSelect from '../FormRowSelect';
import { JOB_SORT_BY, JOB_STATUS, JOB_TYPE } from '../../../../utils/constants.js';
import { useAllJobsContext } from '../../pages/AllJobs';

const SearchContainer = () => {
  const { searchValues } = useAllJobsContext();
  const { search, jobStatus, jobType, sort } = searchValues;

  const submit = useSubmit();

  const handleChange = (form) => {
    submit(form);
  };

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 1500);
    };
  };

  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">search form</h5>
        <div className="form-center">
          <FormRow
            type="search"
            name="search"
            required={false}
            onChange={debounce(handleChange)}
            defaultValue={search}
          />
          <FormRowSelect
            name="jobStatus"
            labelText="job status"
            list={['all', ...Object.values(JOB_STATUS)]}
            defaultValue={jobStatus}
            onChange={debounce(handleChange)}
          />
          <FormRowSelect
            name="jobtype"
            labelText="job type"
            list={['all', ...Object.values(JOB_TYPE)]}
            defaultValue={jobType}
            onChange={debounce(handleChange)}
          />
          <FormRowSelect
            name="sort"
            list={[...Object.values(JOB_SORT_BY)]}
            defaultValue={sort}
            onChange={debounce(handleChange)}
          />

          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Reset Search Values
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
