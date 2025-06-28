import { toast } from 'react-toastify';
import customFetch from '../../utils/customFetch';

const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get('avatar');

  if (file && file.size > 500000) {
    toast.error('Image size is too large');
    return null;
  }

  try {
    await customFetch.patch('/users/update-user', formData);
    toast.success('Avatar updated successfully');
  } catch (err) {
    toast.error(err?.response?.data?.msg);
  }

  return null;
};

export default action;
