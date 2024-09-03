import {Colors} from '@/constants/Theme';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppButton from './Button';
import {EvilIcons} from '@expo/vector-icons';
import {CalendarGradientIcon, ClockGradientIcon} from '@/constants/CustomIcons';

interface ReliefPostProps {
  rentType?: string;
  title?: string;
  dateStart?: string;
  dateEnd?: string;
  image?: string;
  onPress?: () => void;
  location?: string;
  timeStart?: string;
  timeEnd?: string;
  price?: string;
  cwd?: string;
  status?: boolean;
  carBrand?: string;
  carModel?: string;
}
const ReliefPost = ({
  rentType = '',
  title = '',
  dateStart = '',
  dateEnd = '',
  image = '',
  onPress = () => {},
  location = '',
  timeStart = '',
  timeEnd = '',
  price = '',
  cwd = '',
  status = false,
  carBrand = '',
  carModel = '',
}: ReliefPostProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{rentType}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/hyundai.png')}
        />
      </View>

      <View>
        <AppButton
          onPress={onPress}
          paddingVertical={10}
          startIcon={<EvilIcons name="location" size={24} color="white" />}
          variant="gradient"
          title={location}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          marginTop: 10,
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderBottomWidth: 1,
          paddingBottom: 15,
          borderBottomColor: Colors.darkSilver,
        }}>
        <View style={{flex: 3, gap: 10}}>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <CalendarGradientIcon />
            <Text style={{color: Colors.grey, fontSize: 16, fontWeight: '500'}}>
              {dateStart} ~ {dateEnd}
            </Text>
          </View>

          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <ClockGradientIcon />
            <Text style={{color: Colors.grey, fontSize: 16, fontWeight: '500'}}>
              {timeStart} ~ {timeEnd}
            </Text>
          </View>
        </View>
        <View style={{flex: 2, gap: 5}}>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 32,
                lineHeight: 32,
                color: Colors.primary,
              }}>
              ${price}
            </Text>
            <Text style={{color: Colors.grey, fontSize: 16, fontWeight: '500'}}>
              /day
            </Text>
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
              {cwd}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: 5,
          marginTop: 10,
          alignItems: 'center',
        }}>
        <Text onPress={onPress} style={{fontWeight: '700', fontSize: 16}}>
          {carBrand}
        </Text>
        <Text onPress={onPress} style={{color: Colors.grey, fontSize: 14}}>
          {carModel}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    width: '100%',
    gap: 10,
  },

  badgeContainer: {
    position: 'absolute',
    top: 20,
    left: -5,
    paddingHorizontal: 20,
    paddingVertical: 6,
    backgroundColor: Colors.primary,
    borderRadius: 8,
  },

  badgeText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '600',
  },

  imageContainer: {
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    aspectRatio: 4 / 3,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: 20,
  },
});

export default ReliefPost;
