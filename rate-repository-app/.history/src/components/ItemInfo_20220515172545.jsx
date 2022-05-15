import { View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  imageAndTitle: {
    display: 'flex',
    flexDirection: 'row',
  },
  titleAndDesc: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  language: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    padding: 2,
    borderRadius: 3
  },
})

const ItemInfo = ({ logo, fullName, description }) => {
  return (
      <View style={styles.imageAndTitle}>
        <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.titleAndDesc}>
          <Text>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      )
}