import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 80,
    backgroundColor: theme.colors.appBarBackgroundColor,
    display: 'flex',
    flexDirection: 'row'
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarTab text='Repositories' path='/' />
    <AppBarTab text='Sign In' path='/signin' />
  </View>;
};

export default AppBar;