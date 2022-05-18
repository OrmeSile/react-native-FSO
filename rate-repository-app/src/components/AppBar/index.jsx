import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab, {ClickableBarTab} from './AppBarTab';
import { useQuery } from '@apollo/client';
import { ME } from '../../graphql/queries';
import { useEffect, useState } from 'react';
import useSignOut from '../../hooks/useSignOut';

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
  const [signOut, data] = useSignOut();

  const handleClick = async () => {
    await signOut();
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text='Repositories' path='/' />
        {data && !data.me && <AppBarTab text='Sign In' path='/signin' />}
        {data && data.me && <ClickableBarTab onClick ={handleClick} text='Sign out' path='/signIn' />}
      </ScrollView>
    </View>
  );
};

export default AppBar;
