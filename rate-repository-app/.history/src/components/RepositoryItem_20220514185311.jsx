import { Text, View } from 'react-native';

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazerCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  
  return (
    <View>
      <Text>Hello {fullName}</Text>
    </View>
  );
};

export default RepositoryItem;
