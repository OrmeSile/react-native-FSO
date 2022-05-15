import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  infoBlock: {
    display: 'flex',
  },
  infoBar: {
    display: 'flex',
    flexDirection: 'row',
    fle
  },
});

const RatingsInfo = ({ stars, forks, reviews, rating }) => {

  console.log(stars)
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
    <View style={styles.infoBar}>
      <RatingsInfoBlock value={shortenIfBig(stars)} name='Stars' />
      <RatingsInfoBlock value={shortenIfBig(forks)} name='Forks' />
      <RatingsInfoBlock value={shortenIfBig(reviews)} name='Reviews' />
      <RatingsInfoBlock value={shortenIfBig(rating)} name='Rating' />
    </View>
  );
};

export default RatingsInfo
