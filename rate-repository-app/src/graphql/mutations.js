import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      repositoryId
    }
  }
`

export const SIGNUP = gql`
mutation CreateUser($user: CreateUserInput) {
  createUser(user: $user) {
    username
  }
}
`