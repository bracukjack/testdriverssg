import {ProfileGradientIcon} from '@/constants/CustomIcons';
import {Colors} from '@/constants/Theme';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {useRouter} from 'expo-router';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const ProfileScreen = () => {
  const router = useNavigation();
  const useRoute = useRouter();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.headingContainer}>
          <ProfileGradientIcon width={34} />
          <Text style={styles.heading}>Profile</Text>
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.contactContainer}>
            <Image
              style={styles.imageContact}
              source={require('../../../assets/images/profile.png')}
            />

            <View style={{gap: 10}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.title}>Jonathan Smith </Text>
                <MaterialCommunityIcons
                  onPress={() => useRoute.push('profile/edit/')}
                  name="pencil-outline"
                  size={24}
                  color={Colors.primary}
                />
              </View>
              <Text style={styles.description}>+65 82987722</Text>
            </View>
          </View>
        </View>

        <View style={{marginBottom: 10}}>
          <Text
            style={{color: Colors.primary, fontWeight: '500', fontSize: 16}}>
            General Settings
          </Text>
        </View>

        <View style={[styles.contentContainer, {paddingVertical: 10}]}>
          <View style={[styles.textContainer, styles.borderBottom]}>
            <Text style={styles.description}>Notifications</Text>
          </View>

          <View style={[styles.textContainer, styles.borderBottom]}>
            <Text style={styles.description}>Language</Text>
            <Text style={{color: Colors.primary, fontWeight: '600'}}>
              English
            </Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.descriptionRed}>Logout</Text>
            <Text style={{color: Colors.primary}}>V1.1.0</Text>
          </View>
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
    paddingHorizontal: 20,
    width: '100%',
  },

  safeAreaContainer: {
    width: '100%',
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 40,
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

  contentContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.primary,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.dark,
  },
  descriptionRed: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.red,
  },
  contactContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageContact: {
    width: 79,
    height: 79,
    borderRadius: 50,
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },

  borderBottom: {
    borderBottomColor: Colors.darkSilver,
    borderBottomWidth: 1,
  },
});
export default ProfileScreen;
