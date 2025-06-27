import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import Wrapper from './Wrapper';
import JobInfo from '../JobInfo';
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from 'react-icons/fa';
import { Form, Link } from 'react-router-dom';

day.extend(advancedFormat);

interface JobProps {
  position: string;
  company: string;
  jobLocation: string;
  jobType: string;
  createdAt: Date;
  jobStatus: string;
}

const Job = ({ position, company, jobLocation, jobType, createdAt, jobStatus }: JobProps) => {
  const date = day(createdAt).format('DD MMM YYYY');

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${jobStatus}`}>{jobStatus}</div>
        </div>
        <footer className="actions">
          <Link to="#" className="btn edit-btn">
            Edit
          </Link>
          <Form>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
