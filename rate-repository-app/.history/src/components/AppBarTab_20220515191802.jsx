import { StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

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
const AppBarTab = ({ text, onPress, path }) => {
  const customPressable = (
    <Link style={styles.pressableTab}>
      <Text style={styles.tabText} fontWeight='bold' fontSize='subheading'>
        {text}
      </Text>
</Link>
  );

  );
};

export default AppBarTab;
