import {Colors} from '@/constants/Theme';
import {Image, Text} from 'react-native';
import {StyleSheet, View} from 'react-native';
import AppButton from './Button';

interface PromotionProps {
  title?: string;
  description?: string;
  image?: string;
  onPress?: () => void;
}

const Promotion = ({
  title = '',
  description = '',
  image = '',
  onPress = () => {},
}: PromotionProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer]}>
        <Image
          style={styles.image}
          source={require('../../assets/images/carwash.jpeg')}
        />
      </View>

      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text>{description}</Text>
        </View>

        <AppButton
          title="Get Coupon!"
          color="primary"
          paddingVertical={10}
          style={{borderRadius: 10}}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.white,
    width: '48%',
  },
  imageContainer: {
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: Colors.darkSilver,
    objectFit: 'contain',
    aspectRatio: 4 / 3,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'regular',
    color: Colors.primary,
    marginBottom: 5,
  },

  description: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'regular',
    color: Colors.black,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
  },
});

export default Promotion;
