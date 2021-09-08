import * as React from 'react';
// import {StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import IntroScreen from './Containers/IntroScreen';
import MobileNumber from './Containers/MobileNumber';
import MobileVerification from './Containers/MobileVerification';
import SettingsPage from './Containers/SettingsPage';
import NameProfile from './Containers/NameProfile';
import VideoProfile from './Containers/VideoProfile';
import CamSection from './Containers/CamSection';

import Visitors from './Containers/Visitors';
import VisitorsSettings from './Containers/VisitorsSettings';
import Settings from './Containers/Settings';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={IntroScreen} />
        <Stack.Screen name="Mobile" component={MobileNumber} />
        <Stack.Screen name="Verification" component={MobileVerification} />
        <Stack.Screen name="SettingsPage" component={SettingsPage} />
        <Stack.Screen name="NameProfile" component={NameProfile} />
        <Stack.Screen name="VideoProfile" component={VideoProfile} />
        <Stack.Screen name="CamSection" component={CamSection} />
        <Stack.Screen name="Visitors" component={Visitors} />
        <Stack.Screen name="VisitorsSettings" component={VisitorsSettings} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// export default class App extends Component {
//   componentDidMount() {}

//   render() {
//     return (
//       <View style={styles.container}>
//         <IntroScreen />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });

export default MyStack;
