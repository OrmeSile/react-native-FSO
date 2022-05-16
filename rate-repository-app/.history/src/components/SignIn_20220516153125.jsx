import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';

const initialValues = {
  username: '',
  password: ''
}

const LoginForm = ({onSubmit})


const SignIn = () => {
  const onSubmit = () => {
    console.log('');
  };

  return <Formik initialValues={initialValues} onSubmit={onSubmit}>

  </Formik>;
};

export default SignIn;