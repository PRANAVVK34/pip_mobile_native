import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class BusinessText extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.business}>
          <View style={styles.business_sub}>
            <Image
              source={require('../../Assets/sun.png')}
              style={styles.sun}
            />
            <Text style={styles.business_text}>Set Business Hours</Text>
          </View>
          <Image
            source={require('../../Assets/arrow_front.png')}
            style={styles.arrow_front}
          />
        </View>
        <Text style={styles.smallText}>
          Use buiness hours to restrict the times you’d like{'\n'}to receive
          meeting call notifications on your phone.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  business: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  business_sub: {
    display: 'flex',
    flexDirection: 'row',
  },
  smallText: {
    textAlign: 'left',
    marginLeft: 30,
    lineHeight: 20,
    marginBottom: 25,
    color: '#808080',
  },
  sun: {
    width: 24,
    height: 24,
  },
  business_text: {
    color: '#0F1828',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    marginLeft: 5,
  },
  arrow_front: {
    width: 7,
    height: 12,
    marginTop: 8,
    marginRight: 10,
  },
});
