import { toast } from 'react-toastify';
import customFetch from '../../utils/customFetch';
import { redirect } from 'react-router-dom';

const action = (queryClient) => {
  return async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get('avatar');

    if (file && file.size > 500000) {
      toast.error('Image size is too large');
      return null;
    }

    try {
      await customFetch.patch('/users/update-user', formData);
      queryClient.invalidateQueries(['user']);
      toast.success('Avatar updated successfully');
      return redirect('/dashboard');
    } catch (err) {
      toast.error(err?.response?.data?.msg);
      return null;
    }
  };
};

export default action;
