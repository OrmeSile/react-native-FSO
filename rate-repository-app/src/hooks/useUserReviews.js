import { useQuery } from '@apollo/client';
import { GET_USER_REVIEWS } from '../graphql/queries';

const useUserReviews = (variables) => {
  const { loading, data, fetchMore, ...result } = useQuery(GET_USER_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    reviews: data?.me,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useUserReviews;