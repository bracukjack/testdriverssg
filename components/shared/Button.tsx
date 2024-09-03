import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import {Colors} from '@/constants/Theme';
import {LinearGradient} from 'expo-linear-gradient';

interface AppButtonProps {
  title?: string;
  onPress?: () => void;
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'light' | 'dark' | 'grey' | 'success';
  variant?: 'outline' | 'fill' | 'text' | 'gradient' | 'link';
  disabled?: boolean;
  paddingVertical?: number;
  paddingHorizontal?: number;
  style?: ViewStyle;
  textStyle?: TextStyle;
  [key: string]: any;
}

const colorMap = {
  primary: {background: Colors.primary, text: Colors.white},
  secondary: {background: Colors.secondary, text: Colors.white},
  light: {background: Colors.white, text: Colors.primary},
  dark: {background: Colors.dark, text: Colors.white},
  grey: {background: Colors.grey, text: Colors.white},
  success: {background: Colors.success, text: Colors.white},
};

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  startIcon,
  endIcon,
  color = 'primary',
  variant = 'fill',
  disabled = false,
  paddingVertical = 18,
  paddingHorizontal = 15,
  style,
  textStyle,
  ...props
}) => {
  const {background, text} = colorMap[color];

  const buttonStyle: ViewStyle = {
    backgroundColor:
      variant === 'fill'
        ? background
        : variant === 'text'
          ? 'transparent'
          : 'transparent',
    borderColor: background,
    borderWidth: variant === 'outline' ? 2 : 0,
    opacity: disabled ? 0.5 : 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:
      variant === 'link' || variant === 'text' ? 0 : paddingVertical,
    paddingHorizontal:
      variant === 'link' || variant === 'text' ? 0 : paddingHorizontal,
    borderRadius: 20,
    ...style, // Apply custom styles here
  };

  const renderContent = () => {
    if (variant === 'gradient') {
      return (
        <LinearGradient
          colors={[Colors.primary, Colors.secondary]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={[buttonStyle, {paddingVertical, paddingHorizontal}]}>
          {startIcon && <View>{startIcon}</View>}

          {title && (
            <Text
              style={[
                styles.text,
                {
                  color: Colors.white,
                  ...textStyle, // Apply custom text styles here
                },
              ]}>
              {title}
            </Text>
          )}

          {endIcon && <View>{endIcon}</View>}
        </LinearGradient>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={disabled ? undefined : onPress}
          style={[buttonStyle]}
          disabled={disabled}
          {...props}>
          {startIcon && <View>{startIcon}</View>}

          {title && (
            <Text
              style={[
                styles.text,
                {
                  color: variant === 'fill' ? text : background,
                  textDecorationLine: variant === 'link' ? 'underline' : 'none',
                  ...textStyle, // Apply custom text styles here
                },
              ]}>
              {title}
            </Text>
          )}

          {endIcon && <View>{endIcon}</View>}
        </TouchableOpacity>
      );
    }
  };

  return renderContent();
};

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 5,
    fontSize: 16,
  },
});

export default AppButton;
