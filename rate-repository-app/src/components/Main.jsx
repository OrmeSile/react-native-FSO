import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import theme from '../theme';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import { StatusBar } from 'expo-status-bar';
import RepositoryView from './RepositoryView';
import Review from './Review';
import SignUp from './SignUp';

console.log(theme);

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
        <Route path='/signin' element={<SignIn />} exact />
        <Route path='/repositories/:id' element={<RepositoryView />} exact />
        <Route path='/review' element={<Review />} exact />
        <Route path='/signup' element={<SignUp />} exact />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <StatusBar style='auto' />
    </View>
  );
};

export default Main;
