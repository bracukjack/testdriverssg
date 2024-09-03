import {Colors} from '@/constants/Theme';
import {AntDesign, Octicons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import {StyleSheet, Text, View} from 'react-native';

interface NotificationProps {
  title?: string;
  text?: string;
  date?: string;
  status?: boolean;
}

const AppNotification = ({
  title,
  text,
  date,
  status = true,
}: NotificationProps) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <LinearGradient
          colors={[Colors.primary, Colors.secondary]}
          locations={[0, 1]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.icon}>
          <AntDesign
            name="notification"
            size={24}
            color={Colors.white}
            style={{transform: [{scaleX: -1}, {rotate: '15deg'}]}}
          />
        </LinearGradient>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{date}</Text>
        {status && <Octicons name="dot-fill" size={18} color={Colors.red} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 'auto',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
  },

  title: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
    lineHeight: 20,
    color: Colors.primary,
    fontWeight: '600',
  },

  text: {
    fontFamily: 'poppins-regular',
    fontSize: 14,
    lineHeight: 30,
    color: Colors.black,
    fontWeight: '400',
  },
  icon: {
    marginRight: 10,
    padding: 15,
    borderRadius: 30,
  },
  dateContainer: {
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  date: {
    fontFamily: 'poppins-regular',
    fontSize: 12,
    lineHeight: 18,
    color: Colors.grey,
    fontWeight: '400',
  },
});
export default AppNotification;
