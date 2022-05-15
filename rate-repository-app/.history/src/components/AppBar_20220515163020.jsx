import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 70,
    backgroundColor: 'black',
    opacity: 0.5
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable>
      <Text>Repositories</Text>
    </Pressable>
  </View>;
};

export default AppBar;