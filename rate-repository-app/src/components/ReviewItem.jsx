import { View, StyleSheet } from 'react-native';
import Text from './Text';
import { format } from 'date-fns';
import parseISO from 'date-fns/parseISO';
import theme from '../theme';
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
  return (
    <View style={styles.container}>
      <View style={styles.rating}>
        <Text style={styles.text} fontWeight='bold'>
          {review.rating}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text fontWeight='bold' fontSize='subheading'>
          {review.user.username}
        </Text>
        <Text>{date}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
