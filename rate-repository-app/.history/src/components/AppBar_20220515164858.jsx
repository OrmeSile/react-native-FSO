import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
imù

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 80,
    backgroundColor: theme.colors.appBarBackgroundColor,
    opacity: 0.9,
    display: 'flex',
    flexDirection: 'row'
  },

});

const AppBar = () => {
  return <View style={styles.container}>
    
  </View>;
};

export default AppBar;