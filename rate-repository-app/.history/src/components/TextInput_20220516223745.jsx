import { TextInput as NativeTextInput } from 'react-native';

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];
  const errorStyle = [{ ...style, borderColor: 'red' }]

  return <NativeTextInput style={error ? errorStyle : textInputStyle} {...props} />;
};

export default TextInput;