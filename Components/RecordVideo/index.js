// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import AgoraUIKit from 'agora-rn-uikit';

// //appid: "81d99d5bc7ad4117a6023f4128abdb1f"

// export default class RecordVideo extends Component {
//   componentDidMount() {}

//   render() {
//     this.rtcprops = {
//       appid: '81d99d5bc7ad4117a6023f4128abdb1f',
//       channel: 'test',
//     };

//     return <AgoraUIKit rtcProps={this.rtcprops} />;
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

import React, {useState} from 'react';
import {Text, View} from 'react-native';
import AgoraUIKit from 'agora-rn-uikit';

export default function RecordVideo() {
  const [videoCall, setVideoCall] = useState(true);

  const rtcProps = {
    appId: '81d99d5bc7ad4117a6023f4128abdb1f',
    channel: 'testing',
  };

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  const rtcPropsInterface = {
    activeSpeaker: true,
    enableVideo: false,
  };

  return (
    <View>
      {videoCall ? (
        <AgoraUIKit
          rtcProps={rtcProps}
          callbacks={callbacks}
          RtcPropsInterface={rtcPropsInterface}
        />
      ) : (
        <View>
          <Text
            style={{
              textAlign: 'center',
              borderWidth: 1,
              padding: 3,
              marginTop: '50%',
              color: 'blue',
              borderBottomWidth: 2,
            }}
            onPress={() => setVideoCall(true)}>
            Start Call
          </Text>
        </View>
      )}
    </View>
  );
}
