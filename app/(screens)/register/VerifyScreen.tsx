import AppButton from '@/components/shared/Button';
import TextField from '@/components/shared/TextInput';
import {Colors} from '@/constants/Theme';
import {Formik} from 'formik';
import {View, StyleSheet, Text} from 'react-native';
import * as yup from 'yup';

const VerifyScreen = () => {
  const validationSchema = yup.object().shape({
    code: yup.string().required('Required').min(6).max(6, 'Invalid code'),
  });

  const handleSubmit = (values: {code: string}) => {
    // Handle submit logic here, e.g., login
    console.log(values);
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.heading}>Verify Phone Number</Text>
        <Text style={styles.text}>
          Please enter the verification code that we sent to your mobile number
          to complete the new account sign up process.
        </Text>
        <Formik
          initialValues={{code: ''}}
          onSubmit={() => {
            handleSubmit;
          }}
          validationSchema={validationSchema}>
          {({handleChange, handleSubmit, values, errors, touched}) => (
            <View style={styles.formContainer}>
              <TextField
                maxLength={6}
                type="number"
                placeholder="Enter verification code"
                value={values.code}
                onChange={handleChange('code')}
                errorMessage={touched.code ? errors.code : undefined}
              />

              <AppButton
                onPress={handleSubmit}
                title="VERIFY"
                variant="gradient"
              />
            </View>
          )}
        </Formik>
      </View>
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
  },
  container: {
    flex: 1,
    gap: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 40,
    color: Colors.primary,
  },
  formContainer: {
    gap: 18,
    marginBottom: 10,
    width: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.dark,
  },
});
export default VerifyScreen;
