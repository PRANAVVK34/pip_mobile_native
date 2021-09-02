import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class VisitorsLarge extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.number}>2</Text>
        </View>
        <View style={styles.emailContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('../../Assets/mail.png')} />
            <Text style={styles.text}>Email</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.iconContainer}>
            <Image source={require('../../Assets/attach.png')} />
            <Text style={styles.text}>Pin</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.iconContainer}>
            <Image source={require('../../Assets/options.png')} />
            <Text style={(styles.text, styles.lastText)}>More</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  emailContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '55%',
    backgroundColor: '#007AFF',
    paddingVertical: 20,
    borderRadius: 20,
  },
  number: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    color: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 21,
    color: '#FFFFFF',
    marginTop: 10,
  },
  line: {
    width: 2,
    height: 40,
    backgroundColor: '#4DC98D',
  },

  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  lastText: {
    marginTop: 22,
    color: '#FFFFFF',
  },
});
