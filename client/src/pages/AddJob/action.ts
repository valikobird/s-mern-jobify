import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import type { ActionProps } from '../../interfaces';
import customFetch from '../../utils/customFetch';
import { redirect } from 'react-router-dom';

const action = async ({ request }: ActionProps) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/jobs', data);
    toast.success('Job added successfully.');
    return redirect(`/dashboard/all-jobs`);
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError.isAxiosError) {
      toast.error(axiosError?.response?.data?.msg);
    }
    return err;
  }
};

export default action;
