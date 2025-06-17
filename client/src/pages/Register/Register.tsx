import Wrapper from './Wrapper';
import { Logo, FormRow } from '../../components';
import { Form, Link, useNavigation } from 'react-router-dom';

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="valiko" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="bird"
        />
        <FormRow type="text" name="location" defaultValue="valencia" />
        <FormRow type="email" name="email" defaultValue="test@nusho.tut" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? 'submitting...' : 'submit'}
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
