import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class DottedLines extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.pip_container}>
        <Image
          source={require('../../Assets/dotted_line_2.png')}
          style={styles.pip_dot_2}
        />
        <Image
          source={require('../../Assets/dotted_line_1.png')}
          style={styles.pip_dot_1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pip_container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pip_dot_1: {
    position: 'absolute',
    left: 60,
    top: '1%',
    width: 260,
    height: 220,
  },
  pip_dot_2: {
    position: 'absolute',
    left: 0,
    top: '30%',
    width: 68,
    height: 144,
  },
});
