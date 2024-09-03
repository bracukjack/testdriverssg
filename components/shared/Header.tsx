import {Text, View} from 'react-native';
import AppButton from './Button';
import {Feather} from '@expo/vector-icons';
import {useRouter} from 'expo-router';
import {Colors} from '@/constants/Theme';
import {StyleSheet} from 'react-native';

interface HeaderProps {
  onBack?: () => void;
  title?: string;
  action?: React.ReactNode;
}
const Header = ({onBack, title, action}: HeaderProps) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.backContainer}>
        <AppButton
          startIcon={
            <Feather name="chevron-left" color={Colors.primary} size={24} />
          }
          color="light"
          paddingVertical={10}
          paddingHorizontal={18}
          onPress={onBack ? onBack : () => router.back()}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>{title}</Text>
      </View>

      <View style={styles.actionContainer}>{action}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    width: '100%',
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: 6,
    marginBottom: 10,
  },

  backContainer: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  contentContainer: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionContainer: {
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.primary,
  },
});

export default Header;
