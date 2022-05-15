import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  infoBlock: {
    display: 'flex',
  },
  infoBar: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const RatingsInfo = ({ stars, forks, reviews, rating }) => {
  const RatingsInfoBlock = ({ value, name }) => {
    return (
      <View style={styles.infoBlock}>
        <Text fontWeight='bold' fontSize='subheading'>
          {value}
        </Text>
        <Text>{name}</Text>
      </View>
    );
  };
  const shortenIfBig = (value) => {
    if (value < 1000) {
      return value;
    } else {
      const decValue = value / 1000;
      if (decValue.toString().length === 1) {
        return `${decValue}k`;
      } else {
        return `${decValue.toFixed(1)}k`;
      }
    }
  };

  return (
    <View>
      <RatingsInfoBlock value={shortenstars} name='Stars' />
      <RatingsInfoBlock value={forks} name='Forks' />
      <RatingsInfoBlock value={reviews} name='Reviews' />
      <RatingsInfoBlock value={rating} name='Rating' />
    </View>
  );
};
