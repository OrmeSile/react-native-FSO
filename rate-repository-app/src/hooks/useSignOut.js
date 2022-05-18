import useAuthStorage from './useAuthStorage';
import { useApolloClient, useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useSignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const {data} = useQuery(ME);
  
  const signOut = async () => {
    console.log('entered hook');
    await authStorage.clearToken();
    apolloClient.resetStore();
  }

  return [signOut, data];
};

export default useSignOut;
