import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  imageAndTitle: {
    display: 'flex',
    flexDirection: 'row'
  },
  titleAndDesc: {
    display: 'flex',
    flexGrow: 1
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
