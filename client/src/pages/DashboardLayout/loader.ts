import customFetch from '../../utils/customFetch';
import { redirect } from 'react-router-dom';

export const userQuery = {
  queryKey: ['user'],
  queryFn: async () => {
    const { data } = await customFetch.get('/users/current-user');
    return data;
  },
};

const loader = (queryClient) => {
  return async () => {
    try {
      await queryClient.ensureQueryData(userQuery);
    } catch {
      return redirect('/');
    }
  };
};

export default loader;
