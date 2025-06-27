import customFetch from '../../utils/customFetch.ts';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

const action = async ({ params }) => {
  try {
    await customFetch.delete(`/jobs/${params.id}`);
    toast.success(`Job was deleted successfully.`);
  } catch (err) {
    toast.error(err?.message?.error?.msg);
  }

  return redirect('/dashboard/all-jobs');
};

export default action;
