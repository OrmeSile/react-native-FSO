import { Text, View } from 'react-native';

const RepositoryItem = (props) => {
  return (
    <View>
      <Text>Hello {props.fullName}</Text>
    </View>
  );
};

export default RepositoryItem;
