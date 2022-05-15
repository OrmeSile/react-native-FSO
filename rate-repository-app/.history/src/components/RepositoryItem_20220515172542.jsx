import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    marginBottom: 2,
    padding: 10,
    backgroundColor: 'white'
  },

});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageAndTitle}>
        <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.titleAndDesc}>
          <Text>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
