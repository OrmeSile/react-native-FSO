import { useQuery } from '@apollo/client';
import { StyleSheet, FlatList, View } from 'react-native';
import { GET_REPOSITORY_COMMENTS } from '../graphql/queries';
import { useEffect, useState } from 'react';
import Text from './Text';
import ReviewItem from './ReviewItem';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewList = ({ id, repo }) => {
  const [reviews, setReviews] = useState([]);
  const { loading, data, error } = useQuery(GET_REPOSITORY_COMMENTS, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
  });

  useEffect(() => {
    if (data && !loading) {
      const reviews = data.repository.reviews.edges.map((edge) => edge.node);
      setReviews(reviews);
    }
  }, [loading]);

  if (error) {
    console.log(error);
    return <View>{error.error}</View>;
  }
  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryItem item={repo} />}
      renderItem={({ item }) => <ReviewItem review={item} />}
    />
  );
};

export default ReviewList;
