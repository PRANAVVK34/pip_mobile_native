import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default class OtpField extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.circle_input} />
        <View style={styles.circle_input} />
        <View style={styles.circle_input} />
        <View style={styles.circle_input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    bottom: '45%',
    left: '18%',
  },
  circle_input: {
    width: 24,
    height: 24,
    backgroundColor: '#EDEDED',
    fontSize: 32,
    lineHeight: 40,
    marginLeft: 30,
    borderRadius: 30,
  },
});
