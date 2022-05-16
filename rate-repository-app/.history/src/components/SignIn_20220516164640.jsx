import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import { View, Pressable, StyleSheet } from 'react-native';
import theme from '../theme';

const initialValues = {
  username: '',
  password: '',
};

const styles = StyleSheet.create({
  textField: {
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
    height: '10%',
    width: '100%',
    padding: 10,
    margin: 10,
    borderRadius: 3
  },
  container: {
    flex: 1,
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 1,
    margin: 10
  },
  pressable: {
    backgroundColor: theme.colors.primary,
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',

  }
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
      <Pressable
        style={styles.pressable}
        onPress={onSubmit}>
        <Text fontSize='subheading' fontWeight={}>Login</Text>
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
