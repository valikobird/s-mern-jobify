import customFetch from '../../utils/customFetch';

export const allJobsQuery = (params) => {
  const { search, jobStatus, jobType, sort, page } = params;

  return {
    queryKey: ['jobs', search ?? '', jobStatus ?? 'all', jobType ?? 'all', sort ?? 'newest', page ?? 1],
    queryFn: async () => {
      const { data } = await customFetch.get('/jobs', { params });
      return data;
    },
  };
};

const loader = (queryClient) => {
  return async ({ request }) => {
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);

    await queryClient.ensureQueryData(allJobsQuery(params));
    return { searchValues: { ...params } };
  };
};

export default loader;
