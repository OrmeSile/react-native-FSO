import { useLazyQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [getRepositories, { called, loading, data }] = useLazyQuery(
    GET_REPOSITORIES,
    { fetchPolicy: 'cache-and-network' }
  );


  useEffect(() => {
    if (!called) {
      getRepositories();
    }
    if (called && !loading) {
      setRepositories(data.repositories);
    }
  }, [loading])

  return { repositories, loading, refetch: getRepositories };
};

export default useRepositories;
