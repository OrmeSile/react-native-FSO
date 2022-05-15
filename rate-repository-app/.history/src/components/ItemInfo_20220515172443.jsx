const ItemInfo = ({ logo, fullName, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageAndTitle}>
        <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.titleAndDesc}>
          <Text>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
}