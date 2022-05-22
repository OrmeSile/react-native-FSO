import { useMutation } from '@apollo/client';
import { SIGNUP } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGNUP);
  const apolloClient = useApolloClient();

  const signUp = async ({ username, password }) => {
    await mutate({
      variables: {
        user: {
          username,
          password,
        },
      },
    });
    apolloClient.resetStore();
    return result;
  };

  return [signUp, result];
};

export default useSignUp;