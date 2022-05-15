import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import ItemInfo from './ItemInfo';

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
      <ItemInfo 
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
