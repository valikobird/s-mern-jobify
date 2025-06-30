import customFetch from '../../utils/customFetch';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success('Job successfully updated!');
    return redirect('/dashboard/all-jobs');
  } catch (err) {
    toast.error(err?.response?.data?.msg);
    return err;
  }
};

export default action;
