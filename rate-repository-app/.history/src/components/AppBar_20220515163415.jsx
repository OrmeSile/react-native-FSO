import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 70,
    backgroundColor: theme.colors.,
    opacity: 0.5
  },
  pressableTab: {

  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable>
      <Text>Repositories</Text>
    </Pressable>
  </View>;
};

export default AppBar;