import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60
  }
})

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
      <Image style={styles.logo} source={require(item.ownerAvatarUrl}/>
    </View>
  );
};

export default RepositoryItem;
