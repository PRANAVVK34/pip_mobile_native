import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

import HeadingText from '../../Components/HeadingText';
import ButtonLarge from '../../Components/ButtonLarge';
import InputMobile from '../../Components/InputMobile';

export default class MobileNumber extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../Assets/backArrow.png')} />
        <View style={styles.container_box}>
          <HeadingText
            heading_text="Let’s verify your contact"
            heading_text_sub="Please confirm your country code and enter your phone number"
          />
          <InputMobile />
          <View style={styles.btn}>
            <ButtonLarge
              btn_text="continue"
              setupPip={() => {
                this.props.navigation.navigate('Verification');
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btn: {
    marginBottom: '15%',
  },
  container_box: {
    display: 'flex',
    flex: 1,
  },
});
