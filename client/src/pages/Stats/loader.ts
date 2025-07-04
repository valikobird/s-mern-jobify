import customFetch from '../../utils/customFetch';

export const statsQuery = {
  queryKey: ['stats'],
  queryFn: async () => {
    const response = await customFetch.get('/jobs/stats');
    return response.data;
  },
};

const loader = (queryClient) => {
  return async () => {
    await queryClient.ensureQueryData(statsQuery);
  };
};

export default loader;
