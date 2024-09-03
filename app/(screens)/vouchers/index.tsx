import {Colors} from '@/constants/Theme';
import {useRouter} from 'expo-router';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Voucher from '@/components/shared/VoucherComponent';
import React from 'react';
import {ScrollView} from 'react-native';
import Header from '@/components/shared/Header';

export const dummyVouchers = [
  {
    image: '../../assets/images/voucher1.png',
    date: '2024-07-10',
    title: '1 Car Wash',
    category: 'Efficient Towing',
    status: 'active',
  },
  {
    image: '../../assets/images/voucher2.png',
    date: '2024-07-01',
    title: '1 Free Car Inspection or Cleaning Service 1',
    category: 'Efficient Towing',
    status: 'redeem',
  },
  {
    image: '../../assets/images/voucher1.png',
    date: '2024-07-05',
    title: '1 Free Car Inspection or Cleaning Service',
    category: 'Orozoco’s',
    status: 'expired',
  },
  {
    image: '../../assets/images/voucher1.png',
    date: '2024-07-20',
    title: '1 Car Wash',
    category: 'Orozoco’s',
    status: 'active',
  },
];

// const Tab = createMaterialTopTabNavigator();

// export const ActiveVouchers = () => {
//   const activeVouchers = dummyVouchers.filter(item => item.status === 'active');

//   return (
//     <ScrollView
//       contentContainerStyle={{
//         width: '100%',
//         gap: 10,
//       }}
//       showsVerticalScrollIndicator={false}>
//       {activeVouchers.map((item, index) => (
//         <Voucher
//           key={index}
//           image={item.image}
//           width="full"
//           status={item.status}
//           title={item.title}
//           category={item.category}
//           date={item.date}
//         />
//       ))}
//     </ScrollView>
//   );
// };

// export const PastVouchers = () => {
//   const pastVouchers = dummyVouchers.filter(item => item.status === 'past');

//   return (
//     <ScrollView
//       contentContainerStyle={{
//         width: '100%',
//         gap: 10,
//       }}
//       showsVerticalScrollIndicator={false}>
//       {pastVouchers.map((item, index) => (
//         <Voucher
//           key={index}
//           image={item.image}
//           width="full"
//           status={item.status}
//           title={item.title}
//           category={item.category}
//           date={item.date}
//         />
//       ))}
//     </ScrollView>
//   );
// };

const VoucherScreen = () => {
  const dataVouchers = dummyVouchers;
  const router = useRouter();
  // const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <Header onBack={() => router.back()} title="My Vouchers" />

        <ScrollView
          contentContainerStyle={{
            width: '100%',
            gap: 10,
          }}
          showsVerticalScrollIndicator={false}>
          {dataVouchers.map((item, index) => (
            <Voucher
              key={index}
              image={item.image}
              width="full"
              status={item.status}
              title={item.title}
              category={item.category}
              date={item.date}
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
});

export default VoucherScreen;
