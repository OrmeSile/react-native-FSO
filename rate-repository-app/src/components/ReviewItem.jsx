import { View, StyleSheet, Pressable, Alert } from 'react-native';
import Text from './Text';
import { format } from 'date-fns';
import parseISO from 'date-fns/parseISO';
import theme from '../theme';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';
import useUserReviews from '../hooks/useUserReviews';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    flexGrow: 1,
    flexShrink: 1,
  },
  rating: {
    color: theme.colors.primary,
    borderWidth: 2,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  textContainer: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
  },
  text: {
    color: theme.colors.primary,
  },
});

const ReviewItem = ({ review }) => {
  const date = format(parseISO(review.createdAt), 'dd.MM.yyyy');
  const navigate = useNavigate();
  const [mutate] = useMutation(DELETE_REVIEW);
  const { refetch } = useUserReviews({first: 4});

  const deleteReview = () => {
    mutate({ variables: { deleteReviewId: review.id } });
    refetch();
  }
  const handleDelete = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('cancel'),
        },
        {
          text: 'Delete',
          onPress: () => deleteReview(),
        },
      ]
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text style={styles.text} fontWeight='bold'>
          {review.rating}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text fontWeight='bold' fontSize='subheading'>
          {review.user.username
            ? review.user.username
            : `${review.repository.ownerName}/${review.repository.name}`}
        </Text>
        <Text>{date}</Text>
        <Text>{review.text}</Text>
        {!review.user.username && (
          <Pressable
            onPress={() => navigate(`/repositories/${review.repositoryId}`)}
          >
            <Text>View Repository</Text>
          </Pressable>
        )}
        {!review.user.username && (
          <Pressable onPress={handleDelete}>
            <Text>Delete review</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default ReviewItem;
