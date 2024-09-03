import PageConstruction from '@/components/shared/PageConstruction';
import {JobGradientIcon} from '@/constants/CustomIcons';
import {Colors} from '@/constants/Theme';
import {useRouter} from 'expo-router';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
const JobsScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.headingContainer}>
          <JobGradientIcon width={34} />
          <Text style={styles.heading}>Jobs / Trips</Text>
        </View>

        <View>
          <PageConstruction />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: '100%',
  },

  safeAreaContainer: {
    width: '100%',
  },

  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    gap: 10,
    marginVertical: 10,
  },

  heading: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.primary,
  },
});

export default JobsScreen;
