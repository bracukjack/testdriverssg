import BackgroundGradient from '@/components/shared/BackgroundGradient';
import AppButton from '@/components/shared/Button';
import Header from '@/components/shared/Header';
import {LogoText} from '@/constants/CustomIcons';
import {Colors} from '@/constants/Theme';
import {EvilIcons, Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const ScanScreen = () => {
  const router = useNavigation();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Header
          onBack={() => router.goBack()}
          title="My ID"
          action={
            <AppButton
              startIcon={
                <EvilIcons
                  name="share-google"
                  size={24}
                  color={Colors.primary}
                />
              }
              color="light"
              paddingVertical={12}
              paddingHorizontal={18}
            />
          }
        />

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.mainContainer}>
            <BackgroundGradient
              styles={{
                borderRadius: 20,
                gap: 10,
                paddingVertical: 20,
                paddingHorizontal: 30,
              }}>
              <View style={styles.scanContainer}>
                <LogoText height={30} />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                }}>
                <Text style={[styles.description, {color: Colors.white}]}>
                  drivers.sg ID : 35463633
                </Text>
                <AppButton
                  paddingVertical={2}
                  paddingHorizontal={5}
                  style={{borderRadius: 5}}
                  startIcon={
                    <Ionicons name="copy-outline" size={16} color="white" />
                  }
                  textStyle={{fontSize: 12}}
                  color="light"
                  variant="outline"
                  title="Copy"
                />
              </View>

              <View
                style={{
                  alignItems: 'center',
                  aspectRatio: 1,
                  padding: 20,
                }}>
                <Image
                  style={{objectFit: 'contain', height: '100%'}}
                  source={require('../../../assets/images/qrcode.png')}
                />
              </View>

              <View style={{alignItems: 'center', gap: 10}}>
                <View
                  style={{
                    alignItems: 'center',
                    aspectRatio: 1,
                  }}>
                  <Image
                    style={{objectFit: 'contain', height: 100}}
                    source={require('../../../assets/images/barcode.png')}
                  />
                </View>
                <Text style={[styles.description, {color: Colors.white}]}>
                  Scan your drivers.sg ID!
                </Text>
              </View>
            </BackgroundGradient>

            <View style={styles.contentContainer}>
              <Text style={styles.title}>John Smith</Text>
              <Text style={styles.description}>Mobile No. : 82987722</Text>
              <Text style={styles.description}>Joined since : Jan 2025</Text>
            </View>
          </View>
        </ScrollView>
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

  scrollContainer: {
    width: '100%',
    gap: 10,
  },

  safeAreaContainer: {
    width: '100%',
  },

  mainContainer: {
    width: '100%',
    gap: 20,
    justifyContent: 'space-between',
  },

  scanContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginBottom: 60,
    gap: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.primary,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.primary,
  },
});

export default ScanScreen;
