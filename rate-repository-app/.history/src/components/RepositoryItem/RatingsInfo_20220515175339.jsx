import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  infoBlock: {
    display: 'flex'
  },
  infoBar: {
    display: 'flex',
    flexDirection: 'row'
  }
})

const RatingsInfo = ({ stars, forks, reviews, rating }) => {

  const RatingsInfoBlock = ({value, name}) => {

  }
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

  return <View>

  </View>;
};
