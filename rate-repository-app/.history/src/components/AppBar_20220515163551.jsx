import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 70,
    backgroundColor: theme.colors.appBarBackgroundColor,
    opacity: 0.9
  },
  pressableTab: {
    flex
    backgroundColor: theme.colors.primary
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable style={styles.pressableTab}>
      <Text>Repositories</Text>
    </Pressable>
  </View>;
};

export default AppBar;