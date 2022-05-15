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
  pressableTab: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 1,
    backgroundColor: theme.colors.primary
  }
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable style={styles.pressableTab} onPress={() => console.log('pressed')}>
      <Text fontSize='subheading'>Repositories</Text>
    </Pressable>
  </View>;
};

export default AppBar;