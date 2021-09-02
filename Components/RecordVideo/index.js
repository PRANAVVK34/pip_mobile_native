import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AgoraUIKit from 'agora-rn-uikit';

//appid: "81d99d5bc7ad4117a6023f4128abdb1f"

export default class RecordVideo extends Component {
  componentDidMount() {}

  render() {
    this.rtcprops = {
      appid: '81d99d5bc7ad4117a6023f4128abdb1f',
      channel: 'test',
    };

    return <AgoraUIKit rtcProps={this.rtcprops} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
