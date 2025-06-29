import Wrapper from './Wrapper';
import { FormRow, Logo, SubmitBtn } from '../../components';
import { Form, Link } from 'react-router-dom';

const Login = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>login</h4>
        <FormRow type="email" name="email" defaultValue="test@nusho.tut" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <SubmitBtn />
        <button type="button" className="btn btn-block">
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
