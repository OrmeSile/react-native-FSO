import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appBarBackgroundColor: '#24292e',
    mainBackgroundColor: '#e1e4e8',
    errorColor: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export const formTheme = {
  textField: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    width: '100%',
    padding: 10,
    margin: 10,
    borderRadius: 3,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  pressable: {
    backgroundColor: theme.colors.primary,
    width: '100%',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    padding: 15,
    margin: 10,
  },
  buttonText: {
    color: 'white',
  },
}

export default theme;
