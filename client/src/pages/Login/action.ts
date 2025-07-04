import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';
import type { ActionProps } from '../../interfaces';
import customFetch from '../../utils/customFetch';
import { AxiosError } from 'axios';

const action = (queryClient) => {
  return async ({ request }: ActionProps) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post('/auth/login', data);
      await queryClient.invalidateQueries();
      toast.success('Login successful');
      return redirect('/dashboard');
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.isAxiosError) {
        toast.error(axiosError?.response?.data?.msg);
      }
      return err;
    }
  };
};

export default action;
