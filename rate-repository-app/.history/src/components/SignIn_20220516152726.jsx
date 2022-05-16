import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';

const initialValues = {
  username: '',
  password: ''
}


const SignIn = () => {
  return <Formik initialValues={initialValues}>

  </Formik>;
};

export default SignIn;