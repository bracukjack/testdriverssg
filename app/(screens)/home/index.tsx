import EventSimpleList from '@/components/shared/EventSimpleList';
import {Colors} from '@/constants/Theme';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {extractTime} from '@/app/utils/convertDate';
import {dataEvent} from '../events';
import {FontAwesome6, Ionicons} from '@expo/vector-icons';
import AppButton from '@/components/shared/Button';
import {useRouter} from 'expo-router';
import TitleSection from '@/components/shared/TitleSection';
import Voucher from '@/components/shared/VoucherComponent';
import Promotion from '@/components/shared/Promotion';
import {dummyPromotions} from '../promotions';
import {dummyVouchers} from '../vouchers';

const HomeScreen = () => {
  const data = dataEvent;
  const dataVouchers = dummyVouchers;
  const dataPromotions = dummyPromotions;
  const myImage = require('../../../assets/images/profile.png');
  const router = useRouter();
  const notificationsCount = 5;
  const today = new Date().toDateString();

  const filteredData = data.filter(item => {
    const eventDate = new Date(item.date).toDateString();
    return eventDate === today;
  });

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headingContainer}>
          <View style={styles.profileContainer}>
            <Image source={myImage} style={styles.profile} />
            <Text style={{fontSize: 18}}>
              Hello! <Text style={{fontWeight: 'bold'}}>John</Text>
            </Text>
          </View>
          <View style={styles.notificationContainer}>
            <Ionicons
              onPress={() => router.push('/notifications')}
              name="notifications-sharp"
              size={30}
              color={Colors.primary}
            />
            {notificationsCount > 0 && (
              <View style={styles.notificationBadge}>
                <Text style={styles.badgeText}>{notificationsCount}</Text>
              </View>
            )}
          </View>
        </View>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.topContainer}>
            <AppButton
              style={{borderRadius: 30}}
              paddingVertical={12}
              title="Verify your profile to get full benefits"
              endIcon={
                <FontAwesome6
                  name="arrow-right"
                  size={24}
                  color={Colors.white}
                />
              }
            />
            <TitleSection
              title="Today’s Crowd Predictor"
              onPress={() => router.push('/events')}
            />
            <View style={styles.eventContainer}>
              {filteredData.map((item, index) => (
                <EventSimpleList
                  key={index}
                  title={item.title}
                  timeStart={extractTime(item.timeStart)}
                  timeEnd={extractTime(item.timeEnd)}
                  location={item.location}
                  userprofile={item.userprofile}
                  status={item.status}
                />
              ))}
            </View>
            <AppButton
              style={{borderRadius: 30}}
              paddingVertical={12}
              title="Submit your predictions"
              endIcon={
                <FontAwesome6
                  name="arrow-right"
                  size={24}
                  color={Colors.white}
                />
              }
            />
            <TitleSection
              title="Your Vouchers"
              onPress={() => router.push('/vouchers')}
            />
            <ScrollView
              horizontal
              contentContainerStyle={{
                gap: 10,
              }}
              showsHorizontalScrollIndicator={false}>
              {dataVouchers.map((item, index) => (
                <Voucher
                  key={index}
                  image={item.image}
                  title={item.title}
                  status={item.status}
                  date={item.date}
                  category={item.category}
                />
              ))}
            </ScrollView>
            <TitleSection
              title="Benefits & Promotions"
              onPress={() => router.push('/promotions')}
            />

            <View style={styles.promotionContainer}>
              {dataPromotions.map((item, index) => (
                <Promotion
                  key={index}
                  title={item.title}
                  description={item.description}
                  onPress={() => router.push('/promotions/detail/' + item.id)}
                />
              ))}
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
    width: '100%',
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    height: '100%',
  },
  scrollContainer: {
    width: '100%',
  },

  topContainer: {
    width: '100%',
    gap: 10,
  },

  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },

  eventContainer: {
    width: '100%',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    fontSize: 18,
  },

  notificationContainer: {
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 10,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -2,
    backgroundColor: 'red',
    borderRadius: 15,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  promotionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 40,
    justifyContent: 'space-between',
  },
});
export default HomeScreen;
