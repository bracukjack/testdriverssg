import {StyleSheet} from 'react-native';
import {Colors} from '@/constants/Theme';
import {View} from 'react-native';
import MyTabs from './navigations/tabNavigation';

export default function Page() {
  return (
    <View style={styles.container}>
      <MyTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'flex-start',
  },
});
