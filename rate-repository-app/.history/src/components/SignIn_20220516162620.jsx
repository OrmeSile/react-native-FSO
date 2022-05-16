import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { View, Pressable, StyleSheet } from 'react-native';

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  textField: {

  }
})

const LoginForm = ({ onSubmit }) => {

  return (
    <View>
      <FormikTextInput style={s} name='username' placeholder='username' />
      <FormikTextInput secureTextEntry={true} name='password' placeholder='password' />
      <Pressable onPress={onSubmit}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values.username, values.password);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
