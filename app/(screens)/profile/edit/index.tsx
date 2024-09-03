import AppButton from '@/components/shared/Button';
import Header from '@/components/shared/Header';
import {Colors} from '@/constants/Theme';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {useRouter} from 'expo-router';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {Text, View} from 'react-native';

const EditProfileScreen = () => {
  const router = useNavigation();
  const useRoute = useRouter();

  console.log('router', router.getState());

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Header onBack={() => router.goBack()} title="Edit Profile" />

        <View style={styles.mainContainer}>
          <View style={styles.contentContainer}>
            <View>
              <Image
                style={styles.imageContainer}
                source={require('../../../../assets/images/profile.png')}
              />
            </View>

            <View style={[styles.textContainer, styles.borderBottom]}>
              <Text style={styles.description}>Name</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={[
                    styles.description,
                    {color: Colors.primary, fontWeight: '600'},
                  ]}>
                  John {''}
                </Text>
                <MaterialCommunityIcons
                  onPress={() => useRoute.push('profile/edit/')}
                  name="pencil-outline"
                  size={24}
                  color={Colors.primary}
                />
              </View>
            </View>
            <View style={[styles.textContainer, styles.borderBottom]}>
              <Text style={styles.description}>Mobile No.</Text>
              <Text style={{color: Colors.primary}}>+65 9646 4785</Text>
            </View>

            <View style={[styles.textContainer]}>
              <Text style={styles.description}>User Since</Text>
              <Text style={{color: Colors.primary}}>1 Jan 2023</Text>
            </View>
          </View>

          <AppButton title="Permanently Delete Account" color="secondary" />
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
    flex: 1,
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

  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
  },

  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginTop: 50,
    gap: 10,
  },

  description: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },

  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: -50,
  },

  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    width: '100%',
  },

  borderBottom: {
    borderBottomColor: Colors.darkSilver,
    borderBottomWidth: 1,
  },
});

export default EditProfileScreen;
