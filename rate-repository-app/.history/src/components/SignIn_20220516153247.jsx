import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { View } from 'react-native';
import Pressable from 'react-native';

const initialValues = {
  username: '',
  password: ''
}

const LoginForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='username' placeholder='username' />
      <FormikTextInput name='password' placeHolder='password' />
      <Pressable
    </View>
  )
}


const SignIn = () => {
  const onSubmit = () => {
    console.log('');
  };

  return <Formik initialValues={initialValues} onSubmit={onSubmit}>

  </Formik>;
};

export default SignIn;