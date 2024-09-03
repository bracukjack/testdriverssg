import AppButton from '@/components/shared/Button';
import CardContainer from '@/components/shared/CardContainer';
import {Colors} from '@/constants/Theme';
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
import {dummyPromotions} from '../..';
import Header from '@/components/shared/Header';

const DetailPromotionScreen = () => {
  const router = useRouter();
  const route = useRoute<RouteProp<{params: {id: string}}, 'params'>>();
  const {id} = route.params;

  const promotion = dummyPromotions.find(item => item.id === id);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Header onBack={() => router.back()} title={promotion?.title} />

        <ScrollView style={{width: '100%'}}>
          <View style={styles.contentContainer}>
            <View style={[styles.imageContainer]}>
              <Image
                style={styles.image}
                source={require('../../../../../assets/images/carwash.jpeg')}
              />
            </View>

            <View style={styles.discountContainer}>
              <Text style={styles.discountTitle}>{promotion?.discount}</Text>
            </View>

            <View style={{width: '100%'}}>
              <AppButton title="Buy Now" variant="gradient" />
            </View>

            {promotion?.description && (
              <CardContainer
                title="Info"
                description={promotion?.description}
              />
            )}

            {promotion?.howToUse && (
              <CardContainer
                title="How to use"
                description={promotion?.howToUse}
              />
            )}

            {promotion?.termCondition && (
              <CardContainer
                title="Terms & Conditions"
                description={promotion?.termCondition}
              />
            )}

            {promotion?.cancellationPolicy && (
              <CardContainer
                title="Cancellation Policy"
                description={promotion?.cancellationPolicy}
              />
            )}

            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../../../../../assets/images/logoservice.png')}
              />
              <Text style={styles.titleContent}>{promotion?.title}</Text>
            </View>
            <View style={{width: '100%'}}>
              <AppButton title="Buy Now" variant="gradient" />
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

  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },

  imageContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    objectFit: 'cover',
    aspectRatio: 4 / 3,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 20,
  },
  discountContainer: {
    width: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 15,
  },
  discountTitle: {
    color: Colors.white,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
  logoContainer: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    gap: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 70,
    objectFit: 'contain',
    height: 70,
  },
  titleContent: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default DetailPromotionScreen;
