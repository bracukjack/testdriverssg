import AppButton from '@/components/shared/Button';
import {ThemedText} from '@/components/ThemedText';
import {Colors} from '@/constants/Theme';
import {EvilIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import {StyleSheet, Text, View} from 'react-native';

const SuccessScreen = () => {
  const handleSubmit = (values: {mobile: string; password: string}) => {
    // Handle submit logic here, e.g., login
    console.log(values);
  };

  return (
    <LinearGradient
      colors={[Colors.secondary, Colors.primary]}
      locations={[0, 1]}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <View style={styles.container}>
        <EvilIcons name="check" size={100} color="white" />
        <Text style={styles.heading}>Sign Up Success!</Text>
        <Text style={styles.text}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>

        <AppButton
          style={{width: '100%'}}
          onPress={() => {
            handleSubmit;
          }}
          title="OK"
          color="secondary"
        />
      </View>

      <ThemedText style={styles.text}>www.drivers.sg </ThemedText>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    gap: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.white,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default SuccessScreen;
