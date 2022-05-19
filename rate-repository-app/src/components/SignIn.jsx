import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { View, Pressable, StyleSheet } from 'react-native';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  textField: {
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    width: '100%',
    padding: 10,
    margin: 10,
    borderRadius: 3,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  pressable: {
    backgroundColor: theme.colors.primary,
    width: '100%',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    padding: 15,
    margin: 10,
  },
  buttonText: {
    color: 'white',
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required('Username required'),
  password: yup.string().required('password required'),
});

const LoginForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.textField}
        name='username'
        placeholder='username'
      />
      <FormikTextInput
        style={styles.textField}
        secureTextEntry={true}
        name='password'
        placeholder='password'
      />
      <Pressable style={styles.pressable} onPress={onSubmit}>
        <Text style={styles.buttonText} fontSize='subheading' fontWeight='bold'>
          Login
        </Text>
      </Pressable>
    </View>
  );
};

export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
