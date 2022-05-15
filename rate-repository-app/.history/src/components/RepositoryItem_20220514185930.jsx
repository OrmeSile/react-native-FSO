import { Text, View } from 'react-native';

const RepositoryItem = ({item}) => {
  return (
    <View>
      <Text>{item.fullName}</Text>
      <Text></Text>
    </View>
  );
};

export default RepositoryItem;
