import { View, StyleSheet, Image } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  imageAndTitle: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  titleAndDesc: {
    display: 'flex',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    paddingLeft: 10,
  },
  language: {
    margin: 5,
    color: 'white',
    backgroundColor: theme.colors.primary,
    padding: 2,
    borderRadius: 3,
  },
});

const ItemInfo = ({ logo, fullName, description, language }) => {
  return (
    <View testID='itemInfo' style={styles.imageAndTitle}>
      <Image style={styles.logo} source={{ uri: logo }} />
      <View style={styles.titleAndDesc}>
        <Text >{fullName}</Text>
        <Text>{description}</Text>
        <Text style={styles.language}>{language}</Text>
      </View>
    </View>
  );
};

export default ItemInfo;
