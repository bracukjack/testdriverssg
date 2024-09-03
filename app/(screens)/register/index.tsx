import AppButton from '@/components/shared/Button';
import TextField from '@/components/shared/TextInput';
import {Colors} from '@/constants/Theme';
import {Feather} from '@expo/vector-icons';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import * as yup from 'yup';
import Checkbox from 'expo-checkbox';
import {Link} from 'expo-router';

const RegisterScreen = () => {
  const [isChecked, setChecked] = useState(false);

  const validationSchema = yup.object().shape({
    name: yup.string().required('Required'),
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

  const handleSubmit = (values: {
    name: string;
    mobile: string;
    password: string;
  }) => {
    console.log(values);
  };

  return (
    <View style={styles.main}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <Text style={styles.heading}>Sign Up New Account</Text>

          <Formik
            initialValues={{name: '', mobile: '', password: ''}}
            onSubmit={() => {
              handleSubmit;
            }}
            validationSchema={validationSchema}>
            {({handleChange, handleSubmit, values, errors, touched}) => (
              <View style={styles.formContainer}>
                <TextField
                  startIcon={<Feather name="user" size={24} color="black" />}
                  placeholder="User Name"
                  value={values.name}
                  onChange={handleChange('name')}
                  errorMessage={touched.name ? errors.name : undefined}
                />

                <TextField
                  startIcon={
                    <Feather name="smartphone" size={24} color="black" />
                  }
                  placeholder="Mobile Number"
                  value={values.mobile}
                  onChange={handleChange('mobile')}
                  errorMessage={touched.mobile ? errors.mobile : undefined}
                />

                <TextField
                  type="password"
                  startIcon={<Feather name="key" size={24} color="black" />}
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange('password')}
                  errorMessage={touched.password ? errors.password : undefined}
                />

                <View style={styles.containerTerms}>
                  <Checkbox
                    value={isChecked}
                    onValueChange={setChecked}
                    style={styles.checkBox}
                    color={isChecked ? Colors.primary : undefined}
                  />
                  <Text style={styles.text}>
                    I read and agreed on drivers.sg{' '}
                    <Link href={'#'} style={styles.link}>
                      Terms & Conditions
                    </Link>{' '}
                  </Text>
                </View>

                <AppButton
                  onPress={handleSubmit}
                  title="SIGN UP"
                  variant="gradient"
                />
              </View>
            )}
          </Formik>
        </View>
        <Text style={styles.text}>
          Already have an account?{' '}
          <Link href={'/login'} style={styles.linkLogin}>
            Login
          </Link>
        </Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: 20,
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 100,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  safeAreaContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    gap: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.primary,
    lineHeight: 24,
    marginTop: 20,
    marginBottom: 40,
  },
  formContainer: {
    gap: 18,
    marginBottom: 10,
    width: '100%',
  },
  containerTerms: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 16,
    color: Colors.dark,
  },
  link: {
    color: Colors.secondary,
    textDecorationLine: 'underline',
  },
  linkLogin: {
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: '700',
  },
  checkBox: {
    padding: 10,
    borderRadius: 6,
  },
});
export default RegisterScreen;
