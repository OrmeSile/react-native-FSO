import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { View } from 'react-native';

const initialValues = {
  username: '',
  password: ''
}

const LoginForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='username' placeHolder
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