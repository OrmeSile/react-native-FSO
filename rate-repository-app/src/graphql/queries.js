import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories(
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
    $after: String
    $first: Int
  ) {
    repositories(
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
      after: $after
      first: $first
    ) {
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
      pageInfo {
        endCursor
        hasNextPage
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
  query repoComments($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      id
      reviews(first: $first, after: $after) {
        totalCount
        pageInfo {
          hasNextPage
          endCursor
          startCursor
        }
        edges {
          cursor
          node {
            id
            rating
            text
            createdAt
            repositoryId
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

export const GET_USER_REVIEWS = gql`
  query Me($first: Int, $after: String) {
    me {
      reviews(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          startCursor
          endCursor
        }
        edges {
          node {
            repository {
              name
              ownerName
            }
            rating
            createdAt
            text
            repositoryId
            user {
              id
            }
          }
          cursor
        }
      }
    }
  }
`;
