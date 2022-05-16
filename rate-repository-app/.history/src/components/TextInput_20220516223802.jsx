import { TextInput as NativeTextInput } from 'react-native';
import theme from '../theme';

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];
  const errorStyle = [{ ...style, borderColor: theme.colors.errorColor }]

  return <NativeTextInput style={error ? errorStyle : textInputStyle} {...props} />;
};

export default TextInput;