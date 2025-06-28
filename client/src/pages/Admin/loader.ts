import customFetch from '../../utils/customFetch';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

const loader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats');
    return response.data;
  } catch {
    toast.error('You are not authorized to access this page');
    return redirect('/dashboard');
  }
};

export default loader;
