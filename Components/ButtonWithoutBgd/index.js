import React, {Component} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

export default class ButtonWithoutBgd extends Component {
  render() {
    return (
      <View>
        <Pressable style={styles.container}>
          <Text style={styles.btnText}>RESEND CODE</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    bottom: 100,
  },
  btnText: {
    //   fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'center',

    color: '#007AFF',
  },
});
