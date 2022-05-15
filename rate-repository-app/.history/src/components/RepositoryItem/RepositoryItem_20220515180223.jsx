import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import ItemInfo from './ItemInfo';
import RatingsInfo from './RatingsInfo';

const styles = StyleSheet.create({
  container: {
    marginBottom: 2,
    padding: 10,
    backgroundColor: 'white',
  },
});

const RepositoryItem = ({ item }) => {

  return (
    <View style={styles.container}>
      <ItemInfo
        logo={item.ownerAvatarUrl}
        fullName={item.fullName}
        description={item.description}
        language={item.language}
      />
      <RatingsInfo
        stars={item.stargazerCount} 
        forks={item.forksCount}
        reviews={item.reviewCount}
        
        />
    </View>
  );
};

export default RepositoryItem;
