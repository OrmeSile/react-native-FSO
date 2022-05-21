import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_SINGLE_REPOSITORY } from '../graphql/queries';
import { View } from 'react-native';
import { useParams } from 'react-router-native';
import Text from './Text';
import ReviewList from './ReviewList';

const RepositoryView = () => {
  const { id } = useParams();
  const [repoInfo, setRepoInfo] = useState([]);

  const { data, loading, error } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: { id: id },
  });

  useEffect(() => {
    if (data) {
      setRepoInfo(data.repository);
    }
  }, [loading]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>Error ! {error.error}</Text>
      </View>
    );
  }
  return (
    <View>
      <ReviewList id={id} repo={repoInfo} />
    </View>
  );
};

export default RepositoryView;
