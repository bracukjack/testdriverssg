// GradientText.js
import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Text as SvgText,
} from 'react-native-svg';

interface GradientTextProps {
  text: string;
  gradientColors: string[];
  style?: ViewStyle;
}
const GradientText = ({text, gradientColors, style}: GradientTextProps) => {
  return (
    <View style={style}>
      <Svg height="100%" width="100%" viewBox="0 0 100 100">
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            {gradientColors.map((color, index) => (
              <Stop
                key={index}
                offset={`${index * (100 / (gradientColors.length - 1))}%`}
                stopColor={color}
              />
            ))}
          </LinearGradient>
        </Defs>
        <SvgText
          fill="url(#grad)"
          fontSize="20"
          fontWeight="bold"
          x="50%"
          y="50%"
          textAnchor="middle">
          {text}
        </SvgText>
      </Svg>
    </View>
  );
};

export default GradientText;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
