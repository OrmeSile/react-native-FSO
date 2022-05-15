import { StyleSheet, Pressable } from 'react-native';
import Text from './Text';

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
const AppBarTab = ({ text, onPress }) => {
  const fancyButton = (
    <Pressable style={styles.pressableTab} onPress={onPress}>
      <Text style={styles.tabText} fontWeight='bold' fontSize='subheading'>
        {text}
      </Text>
    </Pressable>
  );
  return (
<Link to=
  );
};

export default AppBarTab;
