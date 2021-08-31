import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class HeadingText extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.pip_container}>
        <Text style={styles.headingText}>{this.props.heading_text}</Text>
        <Text style={styles.headingText_sub}>
          {this.props.heading_text_sub}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pip_container: {
    flex: 1,
    marginTop: '20%',
    textAlign: 'center',
    width: '80%',
    left: '10%',
  },

  headingText: {
    fontFamily: 'Mulish',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center',
    color: '#0F1828',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  headingText_sub: {
    fontFamily: 'Mulish',
    fontWeight: '600',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
    color: '#0F1828',
  },
});
