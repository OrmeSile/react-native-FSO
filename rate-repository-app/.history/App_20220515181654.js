import Main from './src/components/Main';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';

const App = () => {
  return (
    <>
      <Main />
      <StatusBar style='auto' />
    </>
  );
};

export default App;
