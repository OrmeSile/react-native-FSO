import { Text, View } from 'react-native';

const RepositoryItem = ({item}) => {
  return (
    <View>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: { item.description}</Text>
      <Text>Language: { item.language}</Text>
      <Text>Stars: { item.stargazersCount}</Text>
      <Text>Forks: { item.forks}</Text>
      <Text></Text>
      <Text></Text>
    </View>
  );
};

export default RepositoryItem;
