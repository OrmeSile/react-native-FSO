import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  imageAndTitle: {
    display: 'flex',
    flexDirection: 'row',
  },
  titleAndDesc: {
    display: 'flex',
    flexGrow: 1,
  },
  language: {
    color: 'white',
    backgroundColor: theme.colors.primary
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <View style={styles.imageAndTitle}>
        <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.titleAndDesc}>
        <Text>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <Text>{item.language}</Text>
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
