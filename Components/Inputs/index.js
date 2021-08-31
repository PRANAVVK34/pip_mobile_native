import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default class Inputs extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder={this.props.placeholder} style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F7F7FC',
    borderRadius: 4,
    color: '#ADB5BD',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 30,
    marginTop: 30,
    paddingLeft: 10,
  },
});
