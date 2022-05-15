import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 70,
    backgroundColor: 'black',
    opacity: 0.5
    // ...
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}>{
    
  }</View>;
};

export default AppBar;