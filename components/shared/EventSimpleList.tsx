import {Logo} from '@/constants/CustomIcons';
import {Colors} from '@/constants/Theme';
import {Image, StyleSheet, Text, View} from 'react-native';

interface EventProps {
  title?: string;
  timeStart?: string;
  timeEnd?: string;
  location?: string;
  userprofile?: string;
  status?: boolean;
}

const EventSimpleList = ({
  title = '',
  timeStart = '',
  timeEnd = '',
  location = '',
  userprofile = '',
  status = false,
}: EventProps) => {
  const formatText = (
    timeStart: string,
    timeEnd: string,
    title: string,
    location: string,
  ) => {
    let text = '';

    if (timeStart) {
      text += timeStart;
    }

    if (timeStart && timeEnd) {
      text += ' ~ ' + timeEnd;
    } else if (timeEnd) {
      text += timeEnd;
    }

    if ((timeStart || timeEnd) && (title || location)) {
      text += ' ' + ' | ' + ' ';
    }

    if (title) {
      text += title;
    }

    if (title && location) {
      text += ' ' + ' | ' + ' ' + location;
    } else if (location) {
      text += location;
    }

    return text;
  };

  return (
    <View style={styles.container}>
      {userprofile ? (
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.image}
        />
      ) : (
        <Logo fontSize={24} />
      )}
      <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
        {formatText(timeStart, timeEnd, title, location)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
    gap: 5,
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  text: {
    flex: 1,
    color: Colors.black,
    fontSize: 13,
    lineHeight: 19,
    fontWeight: '500',
  },
});

export default EventSimpleList;
