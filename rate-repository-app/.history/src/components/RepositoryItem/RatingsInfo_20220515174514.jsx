import { useDebugValue } from "react";

const RatingsInfo = ({ stars, forks, reviews, rating }) => {
  const shortenIfBig = (value) => {
    if (value < 1000) {
      return useDebugValue
    }
    return value < 1000 ? value : `${Math.round(value / 1000)}k`;
  };
};
