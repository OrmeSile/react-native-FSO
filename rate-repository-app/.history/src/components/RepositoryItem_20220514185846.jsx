import { Text, View } from 'react-native';

const RepositoryItem = ({item}) => {
  return (
    <View>
      <Text>{props.item.fullName}</Text>
    </View>
  );
};

export default RepositoryItem;
