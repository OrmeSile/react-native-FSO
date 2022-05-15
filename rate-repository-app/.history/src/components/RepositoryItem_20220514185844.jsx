import { Text, View } from 'react-native';

const RepositoryItem = ({props}) => {
  return (
    <View>
      <Text>{props.item.fullName}</Text>
    </View>
  );
};

export default RepositoryItem;
