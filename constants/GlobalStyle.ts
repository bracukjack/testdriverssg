import {StyleSheet} from 'react-native';

const GlobalStyle = StyleSheet.create({
  primary: {
    fontSize: 20,
    fontFamily: 'montserrat-regular',
    fontWeight: '600',
    lineHeight: 24,
  },
  button: {
    fontSize: 16,
    fontFamily: 'montserrat-regular',
    fontWeight: '500',
    lineHeight: 24,
  },
  accent: {
    fontSize: 16,
    fontFamily: 'montserrat-regular',
    fontWeight: '500',
    lineHeight: 24,
    color: '#031C64',
  },
  text: {
    fontSize: 16,
    fontFamily: 'montserrat-regular',
    fontWeight: '400',
    lineHeight: 20,
  },
  text2: {
    fontSize: 14,
    fontFamily: 'montserrat-regular',
    fontWeight: '400',
    lineHeight: 20,
    color: 'red',
  },
  link: {
    fontSize: 16,
    fontFamily: 'montserrat-regular',
    fontWeight: '500',
    lineHeight: 20,
    textDecorationLine: 'underline',
  },
});

export default GlobalStyle;
