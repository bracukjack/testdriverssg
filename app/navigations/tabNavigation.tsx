import {
  CarIcon,
  HomeIcon,
  JobIcon,
  LogoRounded,
  ProfileIcon,
} from '@/constants/CustomIcons';
import {Colors} from '@/constants/Theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../(screens)/home';
import ReliefScreen from '../(screens)/reliefs';
import ScanScreen from '../(screens)/scan';
import JobsScreen from '../(screens)/jobs';
import ProfileScreen from '../(screens)/profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <Tab.Screen
        options={{
          tabBarActiveTintColor: Colors.secondary,
          tabBarIcon: ({color}) => <HomeIcon color={Colors.darkSilver} />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: Colors.secondary,
          tabBarIcon: ({color}) => <CarIcon color={Colors.darkSilver} />,
        }}
        name="Relief Driver"
        component={ReliefScreen}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: Colors.secondary,
          tabBarIcon: ({color}) => (
            <LogoRounded style={{marginBottom: 30}} color={Colors.darkSilver} />
          ),
        }}
        name="Scan"
        component={ScanScreen}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: Colors.secondary,
          tabBarIcon: ({color}) => <JobIcon color={Colors.darkSilver} />,
        }}
        name="Jobs / Trips"
        component={JobsScreen}
      />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: Colors.secondary,
          tabBarIcon: ({color}) => <ProfileIcon color={Colors.darkSilver} />,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
