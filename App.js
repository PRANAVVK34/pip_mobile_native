import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Mobile from './Containers/VisitorsSettings';

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Mobile />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
