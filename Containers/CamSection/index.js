import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RecordVideo from '../../Components/RecordVideo';

export default class CamSection extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <RecordVideo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
