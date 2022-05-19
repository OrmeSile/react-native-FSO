import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // forced to split queries for custom components, see https://github.com/testing-library/jest-native/issues/60

      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );
      const [firstItemInfo, secondItemInfo] = getAllByTestId('itemInfo');
      const [firstBlockStars, secondBlockStars] = getAllByTestId('blockStars');
      const [firstBlockForks, secondBlockForks] = getAllByTestId('blockForks');
      const [firstBlockReviews, secondBlockReviews] = getAllByTestId('blockReviews');
      const [firstBlockRating, secondBlockRating] = getAllByTestId('blockRating');

      expect(firstBlockStars).toHaveTextContent('21.9kStars');
      expect(secondBlockStars).toHaveTextContent('1.8kStars');
      expect(firstBlockForks).toHaveTextContent('1.6kForks');
      expect(secondBlockForks).toHaveTextContent('69Forks');
      expect(firstBlockReviews).toHaveTextContent('3Reviews');
      expect(secondBlockReviews).toHaveTextContent('3Reviews');
      expect(firstBlockRating).toHaveTextContent('88Rating');
      expect(secondBlockRating).toHaveTextContent('72Rating');
      expect(firstItemInfo).toHaveTextContent('jaredpalmer/formikBuild forms in React, without the tearsTypeScript');
      expect(secondItemInfo).toHaveTextContent('async-library/react-asyncFlexible promise-based React data loaderJavaScript')
    });
  });
});
