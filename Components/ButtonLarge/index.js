import React, {Component} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

export default class ButtonLarge extends Component {
  render() {
    return (
      <View>
        <Pressable style={styles.container}>
          <Text style={styles.btnText}>{this.props.btn_text}</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 20,
    backgroundColor: '#007AFF',
    height: 52,
    borderRadius: 30,
  },
  btnText: {
    textAlign: 'center',
    color: '#F7F7FC',
    fontSize: 16,
    marginTop: 14,
  },
});
