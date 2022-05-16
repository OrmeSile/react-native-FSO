import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { View, Pressable, StyleSheet } from 'react-native';
import theme from '../theme';
import * as yup from 'yup';

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
    borderRadius: 3
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10
  },
  pressable: {
    backgroundColor: theme.colors.primary,
    width: '100%',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    padding: 15,
    margin: 10
  },
  buttonText: {
    color: 'white'
  }
});

const validationSchema = yup

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
      <Pressable
        style={styles.pressable}
        onPress={onSubmit}>
        <Text style={ styles.buttonText} fontSize='subheading' fontWeight='bold'>Login</Text>
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
