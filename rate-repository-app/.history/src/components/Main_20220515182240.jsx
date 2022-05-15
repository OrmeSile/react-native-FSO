import { Text, StyleSheet, View } from 'react-native';
import {Route, Routes, Navigate} from 'react-router-native'
import theme from '../theme';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackgroundColor,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='*'
      </Routes>
        <RepositoryList />
    </View>
  );
};

export default Main;