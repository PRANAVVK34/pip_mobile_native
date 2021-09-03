import React, {Component} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

export default class PipConnect extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.caller_container}>
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
          <Text style={styles.caller_name}>Praveen S K</Text>
        </View>

        <View>
          <View style={styles.line}></View>
          <Image
            source={require('../../Assets/close.png')}
            style={styles.close}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  caller_container: {
    left: '22%',
    top: 30,
    position: 'relative',
  },
  caller: {
    width: 222,
    height: 222,
  },

  decline: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 15,
    top: 100,
  },
  live: {
    width: 34,
    height: 16,
    position: 'absolute',
    left: 90,
    top: 20,
  },
  caller_name: {
    fontSize: 9,
    lineHeight: 13,
    left: 50,
    bottom: 20,
    fontWeight: 'bold',
    position: 'absolute',
    color: 'white',
    backgroundColor: 'black',
    padding: 4,
    borderRadius: 10,
    paddingHorizontal: 40,
  },
  line: {
    width: 7,
    height: 147,
    backgroundColor: 'black',
    opacity: 0.5,
  },
});
