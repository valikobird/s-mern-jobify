import customFetch from '../../utils/customFetch';

const loader = async () => {
  try {
    const response = await customFetch.get('/jobs/stats');
    return response.data;
  } catch (err) {
    return err;
  }
};

export default loader;
