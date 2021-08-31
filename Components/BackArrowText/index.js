import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class BackArrowText extends Component {
  render() {
    return (
      <View style={styles.BackArrowText}>
        <Image
          source={require('../../Assets/b_arrow.png')}
          style={styles.arrow}
        />

        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  BackArrowText: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
  },
  arrow: {
    marginTop: 5,
    marginRight: 10,
  },
});
