import customFetch from '../../utils/customFetch';
import { toast } from 'react-toastify';

const loader = async () => {
  try {
    const { data } = await customFetch.get('/jobs');
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export default loader;
