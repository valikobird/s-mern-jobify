import customFetch from '../../utils/customFetch';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';

export const getJobQuery = (id) => {
  return {
    queryKey: ['job', id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/jobs/${id}`);
      return data;
    },
  };
};

const loader = (queryClient) => {
  return async ({ params }) => {
    try {
      await queryClient.ensureQueryData(getJobQuery(params.id));
      return params.id;
    } catch (err) {
      toast.error(err?.response?.data?.msg);
      return redirect('/dashboard/all-jobs');
    }
  };
};

export default loader;
