import { View, StyleSheet } from 'react-native';
import ItemInfo from './ItemInfo';
import RatingsInfo from './RatingsInfo';
import { Pressable } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  container: {
    marginBottom: 2,
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.colors.primary,
    padding: 10,
    margin: 10,
    borderRadius: 3,
    alignItems: 'center'
  },
  text: {
    color: 'white',
  },
});

const RepositoryItem = ({ item }) => {

  const handlePress = () => {
    Linking.openURL(item.url);
  }
  
  return (
    <View testID='repositoryItem' style={styles.container}>
      <ItemInfo
        logo={item.ownerAvatarUrl}
        fullName={item.fullName}
        description={item.description}
        language={item.language}
      />
      <RatingsInfo
        stars={item.stargazersCount}
        forks={item.forksCount}
        reviews={item.reviewCount}
        rating={item.ratingAverage}
      />
      {item.url && (
        <Pressable style={styles.button} onPress={handlePress}>
          <Text fontWeight='bold' fontSize='subheading' style={styles.text}>
            Open in github
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;
