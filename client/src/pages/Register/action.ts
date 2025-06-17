import { AxiosError } from 'axios';
import customFetch from '../../utils/customFetch';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

interface ActionProps {
  request: Request;
}

const action = async ({ request }: ActionProps) => {
  const fromData = await request.formData();
  const data = Object.fromEntries(fromData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful');
    return redirect('/login');
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.isAxiosError) {
      toast.error(axiosError?.response?.data?.msg);
    }
    return err;
  }
};

export default action;
