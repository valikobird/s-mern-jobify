import Wrapper from './Wrapper';
import { FormRow, Logo, SubmitBtn } from '../../components';
import { Form, Link, useNavigate } from 'react-router-dom';
import customFetch from '../../utils/customFetch.ts';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    };

    try {
      await customFetch.post('/auth/login', data);
      toast.success('Explore the app');
      navigate('/dashboard');
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.isAxiosError) {
        toast.error(axiosError?.response?.data?.msg);
      }
    }
  };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>login</h4>
        <FormRow type="email" name="email" defaultValue="test@nusho.tut" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <SubmitBtn />
        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
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
