import { Text, View } from 'react-native';

const RepositoryItem = ({item}) => {
  return (
    <View>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: { item.description}</Text>
      <Text>Language: </Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
    </View>
  );
};

export default RepositoryItem;
