import {Colors} from '@/constants/Theme';
import {LinearGradient} from 'expo-linear-gradient';
import {ViewStyle} from 'react-native';

interface BackgroundGradientProps {
  color?: string[];
  children: React.ReactNode;
  start?: {x: number; y: number};
  end?: {x: number; y: number};
  styles?: ViewStyle;
}

const BackgroundGradient = ({
  children,
  styles = {},
  color = [Colors.primary, Colors.secondary],
  start = {x: 0, y: 0},
  end = {x: 1, y: 1},
}: BackgroundGradientProps) => {
  return (
    <LinearGradient style={styles} colors={color} start={start} end={end}>
      {children}
    </LinearGradient>
  );
};

export default BackgroundGradient;
