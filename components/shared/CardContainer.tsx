import {Colors} from '@/constants/Theme';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from './Button';

interface CardContainerProps {
  title: string;
  description: string;
  onPress?: () => void;
}
const CardContainer = ({title, description, onPress}: CardContainerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {onPress && (
          <AppButton
            variant="link"
            endIcon="chevron-right"
            title="Lear More"
            onPress={onPress}
          />
        )}
      </View>
      {description && <Text style={styles.text}>{description}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
  },
  text: {color: Colors.black, fontWeight: '400', fontSize: 14, lineHeight: 21},
});

export default CardContainer;
