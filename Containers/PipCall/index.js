import React, {Component} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

export default class PipCall extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../Assets/caller.png')}
            style={styles.caller}
          />
          <Image
            source={require('../../Assets/decline.png')}
            style={styles.decline}
          />
          <Image
            source={require('../../Assets/live.png')}
            style={styles.live}
          />
        </View>

        <View style={styles.textField}>
          <Text style={styles.name}>Praveen S K</Text>
          <Text style={styles.email}>praveensk@gmail.com</Text>

          <View style={styles.inline}>
            <Image source={require('../../Assets/india.png')} />
            <Text style={styles.place}>Trivandrum, India</Text>
          </View>
        </View>

        <View style={styles.icons}>
          <Image
            source={require('../../Assets/disconnect1.jpg')}
            style={styles.disconnect}
          />
          <Image
            source={require('../../Assets/message1.jpg')}
            style={styles.message}
          />
          <Image
            source={require('../../Assets/video_call1.jpg')}
            style={styles.video_call}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1C1C1E',
    width: 179,
    height: 194,
    borderRadius: 15,
    position: 'absolute',
    bottom: 30,
    right: 10,
  },
  caller: {
    width: 86,
    height: 86,
    position: 'relative',
    marginHorizontal: 45,
    marginVertical: '5%',
  },
  decline: {
    width: 14,
    height: 14,
    position: 'absolute',
    left: 48,
    top: 50,
  },
  live: {
    width: 13,
    height: 6,
    position: 'absolute',
    left: '45%',
    top: 12,
  },
  inline: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 14,
    lineHeight: 17,
    color: 'white',
    textAlign: 'center',
  },
  email: {
    color: 'white',
    opacity: 0.5,
    fontSize: 8,
    lineHeight: 14,
    textAlign: 'center',
  },
  place: {
    color: '#C4C4C4',
    fontSize: 5,
    lineHeight: 10,
    textAlign: 'center',
    marginHorizontal: 3,
  },
  disconnect: {
    width: 28,
    height: 28,
  },
  message: {
    width: 28,
    height: 28,
  },
  video_call: {
    width: 28,
    height: 28,
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 10,
  },
});
