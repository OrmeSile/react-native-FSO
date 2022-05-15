import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 80,
    backgroundColor: theme.colors.appBarBackgroundColor,
    display: 'flex',
    flexDirection: 'row',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Repositories' path='/' />
        <AppBarTab text='Sign In' path='/signin' />
        <AppBarTab text='testTabOne' path='/' />
        <AppBarTab text='testTabOne' path='/' />
        <AppBarTab text='testTabOne' path='/' />
        <AppBarTab text='testTabOne' path='/' />
        <AppBarTab text='testTabOne' path='/' />
      </ScrollView>
    </View>
  );
};

export default AppBar;
