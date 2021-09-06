import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';

import IntroScreen from './Containers/IntroScreen';
// import MobileNumber from './Containers/MobileNumber';

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <IntroScreen />
      </View>
    );
  }
}

// const App = createStackNavigator({
//   IntroScreen: {screen: IntroScreen},
//   MobileNumber: {screen: MobileNumber},
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

// export default createAppContainer(App);
