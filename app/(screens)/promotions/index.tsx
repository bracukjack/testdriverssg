import Header from '@/components/shared/Header';
import Promotion from '@/components/shared/Promotion';
import {Colors} from '@/constants/Theme';
import {useRouter} from 'expo-router';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

export const dummyPromotions = [
  {
    id: '123456',
    title: 'BMW Winter Special',
    description: 'Get a free winter tire with every purchase',
    image: '../../assets/images/carwash.jpeg',
    discount: '20% dine in discount',
    info: 'Available until the end of February. Take advantage of our BMW Winter Special and drive safely in the winter season with a free set of winter tires for every new BMW purchased.',
    howToUse:
      'Present this coupon at the dealership when making your purchase. Ensure to mention the BMW Winter Special promotion to the sales representative to avail the offer.',
    termCondition:
      'Valid only for new purchases. This offer cannot be combined with other promotions or discounts. Only applicable for select BMW models.',
    cancellationPolicy:
      'Non-refundable once purchased. Please ensure your decision before finalizing the purchase as this promotional offer is non-refundable under any circumstances.',
    logoService: '../../assets/images/bmw-logo.png',
  },
  {
    id: '234567',
    title: 'Audi Luxury Package',
    description: 'Complimentary luxury package on all new models',
    image: '../../assets/images/carwash.jpeg',
    discount: '20% dine in discount',
    info: 'Includes free detailing and servicing for a year. Our Audi Luxury Package ensures your new car remains in pristine condition with complimentary detailing and servicing for the first year of ownership.',
    howToUse:
      'Applicable only at participating dealers. To take advantage of this offer, visit a participating Audi dealership and mention the Luxury Package promotion during your purchase.',
    termCondition:
      'Cannot be combined with other offers. This promotion is exclusive and cannot be used in conjunction with any other discounts or offers available at the time of purchase.',
    cancellationPolicy:
      'Refundable within 30 days of purchase. If you are not completely satisfied with your new Audi, you can return it within 30 days for a full refund under this promotion.',
    logoService: '../../assets/images/audi-logo.png',
  },
  {
    id: '345678',
    title: 'Ford Family Plan',
    description: 'Special financing options for families',
    image: '../../assets/images/carwash.jpeg',
    discount: '20% dine in discount',
    info: 'Flexible payment plans available. The Ford Family Plan offers special financing options designed to make it easier for families to afford a new vehicle with flexible payment terms tailored to your budget.',
    howToUse:
      'Contact your nearest dealer for more details. To learn more about the Ford Family Plan and see if you qualify, contact your local Ford dealership and speak with a financing specialist.',
    termCondition:
      'Subject to credit approval. All financing options are subject to credit approval by our financial partners. Terms and conditions may vary based on your credit score.',
    cancellationPolicy:
      'No cancellation fee within the first 7 days. If you change your mind within the first 7 days of your purchase, you can cancel without any fees or penalties.',
    logoService: '../../assets/images/ford-logo.png',
  },
  {
    id: '456789',
    title: 'Nissan Year-End Sale',
    description: 'Clearance sale with up to 40% off',
    image: '../../assets/images/carwash.jpeg',
    discount: 'Up to 40%',
    info: "Limited stock available. Our Nissan Year-End Sale offers up to 40% off on select models, but hurry as stock is limited and the best deals will go fast. Don't miss this opportunity to save big on your new Nissan.",
    howToUse:
      'Visit our website to see available models. To take advantage of this year-end sale, visit our website and browse through the available models. Make your selection and proceed with the purchase online or at your nearest dealership.',
    termCondition:
      'Discount varies by model and availability. The discount amount depends on the model selected and current availability. Check with your dealer for the exact discount applicable to your chosen model.',
    cancellationPolicy:
      'Non-refundable after purchase. Due to the deep discounts offered, all sales under this promotion are final and non-refundable. Please ensure your decision before completing the purchase.',
    logoService: '../../assets/images/nissan-logo.png',
  },
];

const PromotionScreen = () => {
  const dataPromotions = dummyPromotions;
  const router = useRouter();

  console.log('dataPromotions', dataPromotions);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header onBack={() => router.back()} title="Benefits & Promotions" />

        <ScrollView>
          <View style={styles.scrollViewContainer}>
            {dataPromotions.map((item, index) => (
              <Promotion
                key={index}
                title={item.title}
                description={item.description}
                onPress={() => router.push('/promotions/detail/' + item.id)}
              />
            ))}
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
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '100%',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 6,
    justifyContent: 'space-between',
    width: '100%',
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.primary,
  },

  safeAreaContainer: {
    width: '100%',
  },

  scrollViewContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
  },
});

export default PromotionScreen;
