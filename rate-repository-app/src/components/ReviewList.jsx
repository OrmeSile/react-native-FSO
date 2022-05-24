import { StyleSheet, FlatList, View } from 'react-native';
import Text from './Text';
import ReviewItem from './ReviewItem';
import RepositoryItem from './RepositoryItem';
import useRepoReviews from '../hooks/useRepoReviews';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewList = ({ id, repo }) => {

  const { reviews, fetchMore, loading } = useRepoReviews({ repositoryId: id, first: 4 });
  const reviewsNodes = reviews ? reviews.reviews.edges.map((edge) => edge.node) : [];

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const onEndReach = () => {
    fetchMore();
  }

  return (
    <FlatList
      data={reviewsNodes}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={() => <RepositoryItem item={repo} />}
      renderItem={({ item }) => <ReviewItem review={item} />}
    />
  );
};

export default ReviewList;
