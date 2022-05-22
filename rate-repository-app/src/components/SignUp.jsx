import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { View, Pressable, StyleSheet } from 'react-native';
import { formTheme } from '../theme';
import * as yup from 'yup';
import useSignUp from '../hooks/useSignup';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create(formTheme);

const initialValues = {
  username: '',
  password: '',
  passwordConf: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().min(1).max(30).required('Username is required'),
  password: yup.string().min(5).max(30).required('Password is required'),
  passwordConf: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required('Password confirmation is required'),
});

const SignupForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.textField}
        name='username'
        placeholder='Username'
      />
      <FormikTextInput
        style={styles.textField}
        name='password'
        placeholder='Password'
        secureTextEntry={true}
      />
      <FormikTextInput
        style={styles.textField}
        name='passwordConf'
        placeholder='Password confirmation'
        secureTextEntry={true}
      />
      <Pressable style={styles.pressable} onPress={onSubmit}>
        <Text style={styles.buttonText} fontSize='subheading' fontWeight='bold'>
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(username, password);
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignupForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUp;
