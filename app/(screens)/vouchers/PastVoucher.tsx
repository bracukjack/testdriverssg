// screens/PastVouchers.js
import Voucher from '@/components/shared/VoucherComponent';
import React from 'react';
import {ScrollView} from 'react-native';
import {dummyVouchers} from '.';

const PastVouchers = () => {
  const pastVouchers = dummyVouchers.filter(item => item.status === 'past');

  return (
    <ScrollView
      contentContainerStyle={{
        width: '100%',
        gap: 10,
      }}
      showsVerticalScrollIndicator={false}>
      {pastVouchers.map((item, index) => (
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
  );
};

export default PastVouchers;
