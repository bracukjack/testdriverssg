import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Feather} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import {Colors} from '@/constants/Theme';
import TextField from '@/components/shared/TextInput';
import AppButton from '@/components/shared/Button';
import {useRouter} from 'expo-router';
import {LogoText} from '@/constants/CustomIcons';

const LoginScreen = () => {
  const router = useRouter();
  const validationSchema = yup.object().shape({
    mobile: yup
      .number()
      .test('mobile', 'Invalid Mobile Number', value => {
        // Custom validation logic for mobile number
        // Return true if the value is valid, otherwise return false
        return value !== undefined && /^\d{10}$/.test(value.toString());
      })
      .required('Required'),
    password: yup
      .string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
  });

  const handleSubmit = (values: {mobile: string; password: string}) => {
    console.log(values);
  };

  return (
    <LinearGradient
      colors={[Colors.secondary, Colors.primary]}
      locations={[0, 1]}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <LogoText style={styles.logo} />
          <Formik
            initialValues={{email: '', mobile: '', password: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}>
            {({handleChange, handleSubmit, values, errors, touched}) => (
              <View style={styles.formContainer}>
                <TextField
                  startIcon={
                    <Feather name="smartphone" size={24} color="black" />
                  }
                  placeholder="Mobile Number"
                  type="tel"
                  value={values.mobile}
                  onChange={handleChange('mobile')}
                  errorMessage={touched.mobile ? errors.mobile : undefined}
                />
                <TextField
                  startIcon={<Feather name="key" size={24} color="black" />}
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange('password')}
                  errorMessage={touched.password ? errors.password : undefined}
                />

                <AppButton
                  onPress={handleSubmit}
                  title="LOGIN"
                  color="secondary"
                />
              </View>
            )}
          </Formik>

          <View style={styles.textContainer}>
            <Text style={styles.themetext}>Don’t have an account?</Text>
            <AppButton
              title="Sign Up"
              variant="text"
              color={'secondary'}
              paddingHorizontal={0}
              onPress={() => router.push('/register')}
            />
          </View>
        </View>

        <View style={styles.textFooter}>
          <Text style={styles.themetext}>www.drivers.sg </Text>
        </View>
      </SafeAreaView>
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
  },
  safeAreaContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
  formContainer: {
    gap: 18,
    marginBottom: 10,
    width: '100%',
  },
  themetext: {
    fontSize: 16,
    color: Colors.white,
    lineHeight: 20,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 40,
  },
  textFooter: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logo: {
    marginVertical: 100,
    objectFit: 'contain',
    width: 150,
  },
});

export default LoginScreen;
