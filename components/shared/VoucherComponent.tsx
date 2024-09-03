import {Colors} from '@/constants/Theme';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
interface VoucherProps {
  image?: string;
  date?: string;
  title: string;
  category: string;
  status?: string | 'active' | 'redeem' | 'expired';
  width?: 'short' | 'full';
  bgColor?: string;
}

const Voucher = ({
  image = '',
  date = '',
  title,
  category,
  status = 'active',
  width = 'short',
  bgColor = Colors.darkSilver,
}: VoucherProps) => {
  const dimensions = Dimensions.get('window');
  const containerWidth = width === 'full' ? '100%' : dimensions.width * 0.65;

  return (
    <View style={[styles.container, {width: containerWidth}]}>
      <View style={[styles.imageContainer, {backgroundColor: bgColor}]}>
        <Image
          style={styles.image}
          source={require('../../assets/images/voucher2.png')}
        />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textEvent} numberOfLines={2}>
            {category}
          </Text>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>

          <View style={{flexDirection: !containerWidth ? 'row' : 'column'}}>
            <Text style={[styles.textExpired]}>
              {status === 'active'
                ? 'Valid Until'
                : status === 'redeem'
                  ? 'Redeem At'
                  : 'Expired'}
            </Text>
            {!containerWidth && <Text> - </Text>}
            <Text
              style={[
                styles.textDate,
                {
                  color:
                    status === 'active'
                      ? Colors.red
                      : status === 'redeem'
                        ? 'green'
                        : Colors.grey,
                },
              ]}>
              {date}
            </Text>
          </View>
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
    height: 120,
  },
  imageContainer: {
    height: 120,
    width: 110,
    borderTopStartRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 10,
  },
  textContainer: {
    flexDirection: 'column',
    maxHeight: 120,
    minHeight: 70,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
    lineHeight: 20,
    marginBottom: 15,
    marginTop: 5,
  },
  textEvent: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: Colors.primary,
  },
  textExpired: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    color: Colors.dark,
  },
  textDate: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
  },
});

export default Voucher;
