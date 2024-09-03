import {Colors} from '@/constants/Theme';
import {Image, StyleSheet, Text, View} from 'react-native';

const PageConstruction = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 200, height: 200}}
        source={require('../../assets/images/construction.png')}
      />
      <Text style={styles.text}>Page Under Construction</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 20,
  },

  text: {
    fontSize: 16,
    color: Colors.grey,
    fontWeight: '500',
    marginTop: 40,
  },
});

export default PageConstruction;
