import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import Video from 'react-native-video';

export default class RecordVideo extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        {/* <Video
          source={{
            uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
          }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
