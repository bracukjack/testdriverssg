import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppButton from './Button';
import {Colors} from '@/constants/Theme';

interface TitleSectionProps {
  title: string;
  onPress?: () => void;
}

const TitleSection: React.FC<TitleSectionProps> = ({title, onPress}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      {onPress && (
        <AppButton variant="text" title="View all" onPress={onPress} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.primary,
  },
});

export default TitleSection;
