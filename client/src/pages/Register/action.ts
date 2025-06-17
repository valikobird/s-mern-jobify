import customFetch from '../../utils/customFetch';
import { redirect } from 'react-router-dom';

interface ActionProps {
  request: Request;
}

const action = async ({ request }: ActionProps) => {
  const fromData = await request.formData();
  const data = Object.fromEntries(fromData);

  try {
    await customFetch.post('/auth/register', data);
    return redirect('/login');
  } catch (err) {
    return err;
  }
};

export default action;
