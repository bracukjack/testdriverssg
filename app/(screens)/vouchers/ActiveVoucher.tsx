// screens/ActiveVouchers.js
import Voucher from '@/components/shared/VoucherComponent';
import React from 'react';
import {ScrollView} from 'react-native';
import {dummyVouchers} from '.';

const ActiveVouchers = () => {
  const activeVouchers = dummyVouchers.filter(item => item.status === 'active');

  return (
    <ScrollView
      contentContainerStyle={{
        width: '100%',
        gap: 10,
      }}
      showsVerticalScrollIndicator={false}>
      {activeVouchers.map((item, index) => (
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

export default ActiveVouchers;
