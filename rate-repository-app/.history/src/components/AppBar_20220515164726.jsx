import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';

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