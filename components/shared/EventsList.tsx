import {Colors} from '@/constants/Theme';
import {AntDesign, Ionicons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Logo, MapsIcon} from '@/constants/CustomIcons';
interface EventsListProps {
  date?: string;
  day?: string;
  title?: string;
  timeStart?: string;
  timeEnd?: string;
  location?: string;
  userprofile?: string;
  status?: boolean;
}

const EventsList = ({
  date,
  day,
  title,
  timeStart,
  timeEnd,
  location,
  userprofile,
  status = false,
}: EventsListProps) => {
  return (
    <View style={styles.container}>
      {status ? (
        <LinearGradient
          colors={[Colors.primary, Colors.secondary]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.dateContainer}>
          <Text style={styles.dateText}>{date}</Text>
          <Text style={styles.dayText}>{day}</Text>
        </LinearGradient>
      ) : (
        <View style={[styles.dateContainer, styles.dateBackground]}>
          <Text style={styles.dateText}>{date}</Text>
          <Text style={styles.dayText}>{day}</Text>
        </View>
      )}
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.textIcon}>
            <AntDesign name="clockcircleo" size={16} color={Colors.primary} />
            <Text>
              {timeStart} ~ {timeEnd}
            </Text>
          </View>
          <View style={styles.textIcon}>
            <Ionicons
              name="location-outline"
              size={16}
              color={Colors.primary}
            />
            <Text>{location}</Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <MapsIcon style={{width: 24, height: 24}} />

          {userprofile ? (
            <Image
              src={userprofile}
              style={{width: 24, height: 24, objectFit: 'cover'}}
            />
          ) : (
            <Logo fontSize={24} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.white,
    width: '100%',
    height: 100,
  },
  dateContainer: {
    height: 100,
    width: 100,
    borderTopStartRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  dateBackground: {
    backgroundColor: Colors.black,
  },
  dateText: {
    fontSize: 36,
    color: Colors.white,
    lineHeight: 43,
    fontWeight: '600',
  },
  dayText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: '600',
    lineHeight: 20,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  textContainer: {
    flexDirection: 'column',
    maxHeight: 100,
    minHeight: 70,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
    lineHeight: 20,
  },
  textIcon: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  iconContainer: {
    flexDirection: 'column',
    maxHeight: 100,
    minHeight: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default EventsList;
