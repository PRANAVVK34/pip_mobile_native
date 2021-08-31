import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Avatar extends Component {
  render() {
    return (
      <View style={styles.avatar}>
        <Image
          source={require('../../Assets/Avatar.png')}
          style={styles.avatar_image}
        />

        <Text style={styles.text}>
          ex: Hi! I’m Manoj from Shopper.{'\n'} How can I help you today?
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar_image: {
    width: 207,
    height: 207,
  },
  text: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 24,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#ADB5BD',
  },
});
