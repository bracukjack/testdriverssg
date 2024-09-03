import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Colors} from '@/constants/Theme';
import {extractDate, extractDay, extractTime} from '@/app/utils/convertDate';
import {Text} from 'react-native';
import {groupDataByMonth} from '@/app/utils/splitByMonth';
import AppButton from '@/components/shared/Button';
import EventsList from '@/components/shared/EventsList';
import {FilterIcon} from '@/constants/CustomIcons';
import {useRouter} from 'expo-router';
import Header from '@/components/shared/Header';

export const dataEvent = [
  {
    date: '2024-07-29',
    title: 'BTS Concert',
    timeStart: '2024-08-01T08:00:00Z',
    timeEnd: '2024-08-01T20:00:00Z',
    location: 'National Stadium',
    userprofile: '../../assets/images/profile.png',
    status: true,
  },
  {
    date: '2024-07-29',
    title: 'Music Festival',
    timeStart: '2024-08-10T06:00:00Z',
    timeEnd: '2024-08-10T18:00:00Z',
    location: 'City Park',
    userprofile: '',
    status: false,
  },
  {
    date: '2024-07-29',
    title: 'Tech Conference',
    timeStart: '2024-08-10T06:00:00Z',
    timeEnd: '2024-08-10T18:00:00Z',
    location: 'Convention Center',
    userprofile: '../../assets/images/profile.png',
    status: true,
  },
  {
    date: '2024-07-21',
    title: 'Art Exhibition',
    timeStart: '2024-10-01T23:00:00Z',
    timeEnd: '2024-09-01T09:00:00Z',
    location: 'Art Gallery',
    userprofile: '',
    status: false,
  },
  {
    date: '2024-07-29',
    title: 'Food Carnival',
    timeStart: '2024-10-01T09:00:00Z',
    timeEnd: '2024-10-01T23:00:00Z',
    location: 'Downtown',
    userprofile: '',
    status: true,
  },

  {
    date: '2024-06-18',
    title: 'BTS Concert',
    timeStart: '2024-10-01T23:00:00Z',
    timeEnd: '2024-09-01T09:00:00Z',
    location: 'National Stadium',
    userprofile: '../../../assets/images/profile.png',
    status: true,
  },
  {
    date: '2024-06-19',
    title: 'Music Festival',
    timeStart: '2024-10-01T09:00:00Z',
    timeEnd: '2024-10-01T23:00:00Z',
    location: 'City Park',
    userprofile: '',
    status: false,
  },
  {
    date: '2024-06-20',
    title: 'Tech Conference',
    timeStart: '2024-10-01T09:00:00Z',
    timeEnd: '2024-10-01T23:00:00Z',
    location: 'Convention Center',
    userprofile: '../../../assets/images/profile.png',
    status: true,
  },
  {
    date: '2024-06-21',
    title: 'Art Exhibition',
    timeStart: '2024-08-01T08:00:00Z',
    timeEnd: '2024-08-01T20:00:00Z',
    location: 'Art Gallery',
    userprofile: '',
    status: false,
  },
  {
    date: '2024-06-22',
    title: 'Food Carnival',
    timeStart: '2024-10-01T09:00:00Z',
    timeEnd: '2024-10-01T23:00:00Z',
    location: 'Downtown',
    userprofile: '../../../assets/images/profile.png',
    status: true,
  },
];
const EventScreen = () => {
  const groupedData = groupDataByMonth(dataEvent);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Header
          onBack={() => router.back()}
          title="Crowd Predictor"
          action={
            <AppButton
              startIcon={<FilterIcon color={Colors.primary} height={24} />}
              color="light"
              paddingVertical={12}
              paddingHorizontal={18}
            />
          }
        />
        <ScrollView style={{width: '100%'}}>
          {Object.keys(groupedData).map((monthYear, index) => (
            <View key={index} style={styles.monthContainer}>
              <Text style={styles.monthTitle}>{monthYear}</Text>
              {groupedData[monthYear].map((item, itemIndex) => (
                <EventsList
                  key={itemIndex}
                  date={extractDate(item.date)}
                  day={extractDay(item.date)}
                  title={item.title}
                  timeStart={extractTime(item.timeStart)}
                  timeEnd={extractTime(item.timeEnd)}
                  location={item.location}
                  userprofile={item.userprofile}
                  status={item.status}
                />
              ))}
            </View>
          ))}
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

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: 6,
    marginBottom: 10,
  },

  heading: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.primary,
  },
  monthContainer: {
    flex: 1,
    gap: 10,
    marginBottom: 20,
  },
  monthTitle: {
    fontSize: 16,
    lineHeight: 30,
    fontWeight: '500',
    color: Colors.primary,
  },
});

export default EventScreen;
