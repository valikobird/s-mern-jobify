import customFetch from '../../utils/customFetch';

const loader = async () => {
  const response = await customFetch.get('/jobs/stats');
  return response.data;
};

export default loader;
