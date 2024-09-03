import {RouteProp, useRoute} from '@react-navigation/native';
import {useRouter} from 'expo-router';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {reliefPosts} from '../..';
import Header from '@/components/shared/Header';
import {Colors} from '@/constants/Theme';
import {convertDate, extractTime} from '@/app/utils/convertDate';
import {EvilIcons, FontAwesome5} from '@expo/vector-icons';
import AppButton from '@/components/shared/Button';

const DetailRelief = () => {
  const router = useRouter();
  const route = useRoute<RouteProp<{params: {id: string}}, 'params'>>();
  const {id} = route.params;

  const relief = reliefPosts.find(item => item.id === id);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Header onBack={() => router.back()} title={relief?.carBrand} />

        <ScrollView style={{width: '100%', marginBottom: 20}}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../../../../assets/images/hyundai.png')}
            />
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{relief?.carBrand}</Text>
              <Text>{relief?.carModel}</Text>
            </View>

            <View style={styles.textContainer}>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>${relief?.price}</Text>
                <Text style={styles.subTitle}>/day</Text>
              </View>
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: Colors.darkSilver,
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                }}>
                <Text
                  style={{
                    color: Colors.dark,
                    fontSize: 11,
                    textAlign: 'center',
                  }}>
                  {relief?.cwd}
                </Text>
              </View>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.subTitle}>Rent Detail</Text>
              <Text>{relief?.rentType}</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.subTitle}>Location</Text>
              <Text style={styles.description}>
                <EvilIcons name="location" size={16} color="black" />{' '}
                {relief?.location}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.subTitle}>Period</Text>
              <Text style={styles.description}>
                {relief?.dateStart ? convertDate(relief.dateStart) : ''} ~{' '}
                {relief?.dateEnd ? convertDate(relief.dateEnd) : ''}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.subTitle}>Collection/Return Time</Text>
              <Text style={styles.description}>
                {relief?.timeStart ? extractTime(relief?.timeStart) : ''} ~{' '}
                {relief?.timeEnd ? extractTime(relief?.timeEnd) : ''}
              </Text>
            </View>

            <View style={{gap: 10, paddingVertical: 20}}>
              <Text style={styles.title}>Additional Info</Text>
              <Text style={styles.subTitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo conDuis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo conDuis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatu.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo conDuis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatu.
              </Text>
            </View>
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.contactContainer}>
              <Image
                style={styles.imageContact}
                source={require('../../../../../assets/images/profile.png')}
              />

              <View style={{gap: 10}}>
                <Text style={styles.title}>Jonathan Smith</Text>
                <Text style={styles.description}>+65 82987722</Text>
              </View>
            </View>
            <AppButton
              startIcon={
                <FontAwesome5 name="whatsapp" size={24} color={Colors.white} />
              }
              title="Contact WhatsApp"
              color="success"
              paddingVertical={10}
            />
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

  safeAreaContainer: {
    width: '100%',
  },
  imageContainer: {
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    aspectRatio: 5 / 3,
    backgroundColor: Colors.white,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: 20,
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginTop: 20,
    gap: 10,
  },
  textContainer: {
    gap: 5,
    borderBottomColor: Colors.darkSilver,
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primary,
  },
  carModel: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: Colors.grey,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.grey,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 16,
    color: Colors.dark,
  },
  priceContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  price: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.primary,
  },
  contactContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageContact: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default DetailRelief;
