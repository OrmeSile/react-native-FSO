import { Text, View } from "react-native";

const RepositoryItem = ({fullName, description, language, forksCount, }) => {
  return (
    <View>
      <Text>Hello { props.fullName}</Text>
    </View>
  )
}

export default RepositoryItem;