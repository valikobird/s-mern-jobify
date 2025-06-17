import customFetch from '../../utils/customFetch';
import { redirect } from 'react-router-dom';

const loader = async () => {
  try {
    const { data } = await customFetch.get('/users/current-user');
    return data;
  } catch {
    return redirect('/');
  }
};

export default loader;
