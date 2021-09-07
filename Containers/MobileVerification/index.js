import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

import HeadingText from '../../Components/HeadingText';
import OtpField from '../../Components/OtpField';
import ButtonWithoutBgd from '../../Components/ButtonWithoutBgd';

export default class MobileNumber extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../Assets/backArrow.png')} />
        <HeadingText
          heading_text="Enter Code"
          heading_text_sub="We have sent you an SMS with the code to +62 1309 - 1710 - 1920"
        />
        <OtpField />
        <ButtonWithoutBgd
          btnClick={() => {
            this.props.navigation.navigate('SettingsPage');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
