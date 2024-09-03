import {convertDate, extractTime} from '@/app/utils/convertDate';
import AppButton from '@/components/shared/Button';
import ReliefPost from '@/components/shared/ReliefPost';
import TextField from '@/components/shared/TextInput';
import {
  CarGradientIcon,
  FilterGradientIcon,
  SearchGradientIcon,
} from '@/constants/CustomIcons';
import {Colors} from '@/constants/Theme';
import {FontAwesome6} from '@expo/vector-icons';
import {useRouter} from 'expo-router';
import {Formik} from 'formik';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import * as yup from 'yup';

export const reliefPosts = [
  {
    id: '1',
    rentType: 'Temporary',
    title: 'Food Delivery Drive',
    dateStart: '2024-08-01T08:00:00Z',
    dateEnd: '2024-08-01T20:00:00Z',
    image: 'https://example.com/images/food-delivery.jpg',
    location: 'Central, Orchard',
    timeStart: '2024-08-01T08:00:00Z',
    timeEnd: '2024-08-01T20:00:00Z',
    price: '100',
    cwd: 'Include CWD',
    status: true,
    carBrand: 'Toyota',
    carModel: 'Hiace 2021',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.',
  },
  {
    id: '2',
    rentType: 'Temporary',
    title: 'Taxi Service for Elderly',
    dateStart: '2024-08-10T06:00:00Z',
    dateEnd: '2024-08-10T18:00:00Z',
    image: 'https://example.com/images/taxi-service.jpg',
    location: 'Central, Orchard',
    timeStart: '2024-08-10T06:00:00Z',
    timeEnd: '2024-08-10T18:00:00Z',
    price: '45',
    cwd: 'Include CWD',
    status: true,
    carBrand: 'Hyundai',
    carModel: 'Sonata 2023',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.',
  },
  {
    id: '3',
    rentType: 'Temporary',
    title: 'Carpooling for Office Workers',
    dateStart: '2024-10-01T23:00:00Z',
    dateEnd: '2024-09-01T09:00:00Z',
    image: 'https://example.com/images/carpooling.jpg',
    location: 'Central, Orchard',
    timeStart: '2024-10-01T23:00:00Z',
    timeEnd: '2024-09-01T09:00:00Z',
    price: '40',
    cwd: 'Include CWD',
    status: false,
    carBrand: 'Honda',
    carModel: 'Civic 2024',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.',
  },
  {
    id: '4',
    rentType: 'Temporary',
    title: 'Luxury Car Hire for Events',
    dateStart: '2024-10-01T09:00:00Z',
    dateEnd: '2024-10-01T23:00:00Z',
    image: 'https://example.com/images/luxury-car.jpg',
    location: 'Central, Orchard',
    timeStart: '2024-10-01T09:00:00Z',
    timeEnd: '2024-10-01T23:00:00Z',
    price: '100',
    cwd: 'Include CWD',
    status: true,
    carBrand: 'BMW',
    carModel: '7 Series 2024',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.',
  },
];

const ReliefScreen = () => {
  const dataRelief = reliefPosts;
  const validationSchema = yup.object().shape({
    name: yup.string().required('Required'),
  });
  const handleSubmit = (values: {name: string}) => {
    console.log(values);
  };

  const router = useRouter();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.headingContainer}>
          <CarGradientIcon width={34} />
          <Text style={styles.heading}>Relief Driver</Text>
        </View>

        <View style={styles.contentContainer}>
          <AppButton
            paddingVertical={12}
            style={{borderRadius: 30}}
            title="List your vehicle now"
            endIcon={
              <FontAwesome6 name="arrow-right" size={24} color={Colors.white} />
            }
          />

          <Formik
            initialValues={{name: ''}}
            onSubmit={() => {
              handleSubmit;
            }}
            validationSchema={validationSchema}>
            {({handleChange, values}) => (
              <View style={styles.filterContainer}>
                <TextField
                  paddingHorizontal={20}
                  style={{flex: 4}}
                  placeholder="Search here!"
                  value={values.name}
                  onChange={handleChange('name')}
                  endIcon={<SearchGradientIcon width={24} />}
                />
                <AppButton
                  color="light"
                  paddingVertical={12}
                  endIcon={<FilterGradientIcon width={24} />}
                />
              </View>
            )}
          </Formik>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={{marginBottom: 30, gap: 20}}>
            {dataRelief.map((item, index) => (
              <ReliefPost
                rentType={item.rentType}
                location={item.location}
                dateStart={convertDate(item.dateStart)}
                dateEnd={convertDate(item.dateEnd)}
                timeStart={extractTime(item.timeStart)}
                timeEnd={extractTime(item.timeEnd)}
                carBrand={item.carBrand}
                carModel={item.carModel}
                price={item.price}
                cwd={item.cwd}
                onPress={() => {
                  router.push('/reliefs/detail/' + item.id);
                }}
                key={index}
              />
            ))}
          </View>
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
    paddingHorizontal: 20,
    width: '100%',
  },

  safeAreaContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },

  scrollContainer: {
    width: '100%',
    gap: 10,
  },

  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    gap: 10,
    marginVertical: 10,
  },

  heading: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.primary,
  },

  contentContainer: {
    width: '100%',
    gap: 10,
  },

  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 6,
    marginBottom: 10,
  },
});

export default ReliefScreen;
