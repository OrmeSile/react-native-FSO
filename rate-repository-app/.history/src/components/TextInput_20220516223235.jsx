import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  error: {
    borderColor: 'red'
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];
  const errorStyle = [{ ...style, styles.error }]

  return <NativeTextInput style={error ? errorStyle : textInputStyle} {...props} />;
};

export default TextInput;