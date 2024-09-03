import AppButton from '@/components/shared/Button';
import Header from '@/components/shared/Header';
import AppNotification from '@/components/shared/Notification';
import {Colors} from '@/constants/Theme';
import {useRouter} from 'expo-router';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

const notifications = [
  {title: 'Title Here!', text: 'Description are placed here!', date: '21 May'},
  {title: 'Title Here!', text: 'Description are placed here!', date: '21 May'},
  {title: 'Title Here!', text: 'Description are placed here!', date: '21 May'},
  {title: 'Title Here!', text: 'Description are placed here!', date: '21 May'},
  {title: 'Title Here!', text: 'Description are placed here!', date: '21 May'},
  {title: 'Title Here!', text: 'Description are placed here!', date: '21 May'},
  {title: 'Title Here!', text: 'Description are placed here!', date: '21 May'},
  {title: 'Title Here!', text: 'Description are placed here!', date: '21 May'},
  {title: 'Title Here!', text: 'Description are placed here!', date: '21 May'},
  {title: 'Title Here!', text: 'Description are placed here!', date: '21 May'},
];

const NotificationScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Header
          onBack={() => router.back()}
          title="Notification"
          action={
            <AppButton color="light" paddingVertical={12} title="Clear" />
          }
        />

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {notifications.map((notification, index) => (
            <AppNotification
              key={index}
              title={notification.title}
              text={notification.text}
              date={notification.date}
            />
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
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  safeAreaContainer: {
    width: '100%',
  },

  scrollContainer: {
    width: '100%',
    gap: 10,
  },
});

export default NotificationScreen;
