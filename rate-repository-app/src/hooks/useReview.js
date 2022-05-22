import { useMutation } from "@apollo/client";
import { REVIEW } from "../graphql/mutations";

const useReview = () => {
  const [mutate, result] = useMutation(REVIEW);

  const review = async ({ ownerName, repositoryName, rating, text }) => {
    const {data} = await mutate({
      variables: {
        review: {
          ownerName,
          repositoryName,
          rating,
          text
        },
      },
    });
    return data;
  }
  return [review, result];
}

export default useReview;