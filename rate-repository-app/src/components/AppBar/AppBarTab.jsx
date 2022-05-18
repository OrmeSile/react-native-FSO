import { StyleSheet } from 'react-native';
import Text from '../Text';
import { Link } from 'react-router-native';
import {Pressable} from 'react-native';

const styles = StyleSheet.create({
  pressableTab: {
    display: 'flex',
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  tabText: {
    color: 'white',
  },
});

export const ClickableBarTab = ({ text, path, onClick }) => {
  return (
    <Pressable style={styles.pressableTab} onPress={onClick} to={path} >
      <Text style={styles.tabText} fontWeight='bold' fontSize='subheading'>
        {text}
      </Text>
    </Pressable>
  );
};

const AppBarTab = ({ text, path }) => {
  return (
    <Link style={styles.pressableTab} to={path}>
      <Text style={styles.tabText} fontWeight='bold' fontSize='subheading'>
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;
