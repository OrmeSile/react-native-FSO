
const RatingsInfo = ({ stars, forks, reviews, rating }) => {
  const shortenIfBig = (value) => {
    if (value < 1000) {
      return value
    }
    
    return value < 1000 ? value : `${(value / 1000)}k`;
  };
};
