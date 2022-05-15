
const RatingsInfo = ({ stars, forks, reviews, rating }) => {
  const shortenIfBig = (value) => {
    if (value < 1000) {
      return value
    } else {
      const decValue = value / 1000;
      if (decValue.toString().length === 1) {
        return `${decValue}k`
      } else {
        return 
      }
    }
    return value < 1000 ? value : `${(value / 1000)}k`;
  };
};
