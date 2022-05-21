import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          ratingAverage
          reviewCount
          stargazersCount
          forksCount
          language
          description
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const ME = gql`
  query {
    me {
      id
    }
  }
`;

export const GET_SINGLE_REPOSITORY = gql`
  query singleRepo($id: ID!) {
    repository(id: $id) {
      id
      fullName
      ratingAverage
      reviewCount
      stargazersCount
      forksCount
      language
      description
      ownerAvatarUrl
      url
    }
  }
`;

export const GET_REPOSITORY_COMMENTS = gql`
  query repoComments($id: ID!) {
    repository(id: $id) {
      id
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
