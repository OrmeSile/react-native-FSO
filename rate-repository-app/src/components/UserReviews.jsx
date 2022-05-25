import useUserReviews from '../hooks/useUserReviews';
import { StyleSheet, FlatList, View } from 'react-native';
import ReviewItem from './ReviewItem';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviews = () => {
  const { fetchMore, reviews, loading, refetch } = useUserReviews({ first: 4 });

  const reviewNodes = reviews
    ? reviews.reviews.edges.map((edge) => edge.node)
    : [];

  const onEndReach = () => {
    fetchMore();
  };

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (reviewNodes.length === 0) {
    return (
      <View>
        <Text>No reviews yet...</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={reviewNodes}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={(_item, index) => index.toString()}
      />
    </View>
  );
};

export default UserReviews;
