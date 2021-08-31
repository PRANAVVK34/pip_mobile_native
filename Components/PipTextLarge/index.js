import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class PipTextLarge extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pipText}>pip</Text>
        <Text style={styles.pipText_sub1}>
          Connect easily with{'\n'} your customers live on{'\n'} video, the
          human way
        </Text>
        <Text style={styles.pipText_sub2}>Terms &amp; Privacy Policy</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: -80,
  },
  pipText: {
    fontFamily: 'Avenir',
    fontSize: 117,
    color: '#007AFF',
  },

  pipText_sub1: {
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center',
    color: '#0F1828',
    marginTop: 15,
  },
  pipText_sub2: {
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 14,
    marginTop: 30,
    textAlign: 'center',
    color: '#0F1828',
  },
});
