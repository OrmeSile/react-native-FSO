import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 70,
    backgroundColor: theme.colors.appBarBackgroundColor,
    opacity: 0.9,
    display: 'flex',
    flexDirection: 'row'
  },
  pressableTab: {
    backgroundColor: theme.colors.primary
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable style={styles.pressableTab} onPress={() => console.log('pressed')}>
      <Text>Repositories</Text>
    </Pressable>
  </View>;
};

export default AppBar;