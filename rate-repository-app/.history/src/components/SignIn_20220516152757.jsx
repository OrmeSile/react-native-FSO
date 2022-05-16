import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';

const initialValues = {
  username: '',
  password: ''
}


const SignIn = () => {
  const onSubmit = () => null;

  return <Formik initialValues={initialValues} onSubmit={onSubmit}>

  </Formik>;
};

export default SignIn;