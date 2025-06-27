import customFetch from '../../utils/customFetch';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/jobs/${params.id}`);
    return data;
  } catch (err) {
    toast.error(err?.response?.data?.msg);
    return redirect('/dashboard/all-jobs');
  }
};

export default loader;
