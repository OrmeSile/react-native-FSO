import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_COMMENTS } from '../graphql/queries';

const useRepoReviews = (variables) => {
  const { loading, data, fetchMore, ...result } = useQuery(
    GET_REPOSITORY_COMMENTS,
    {
      fetchPolicy: 'cache-and-network',
      variables,
    }
  );

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }
    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    reviews: data?.repository,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepoReviews;
