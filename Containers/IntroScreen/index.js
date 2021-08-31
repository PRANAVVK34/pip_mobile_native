import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import DottedLines from '../../Components/DottedLines';
import PipImage from '../../Components/PipImage';
import PipTextLarge from '../../Components/PipTextLarge';
import ButtonLarge from '../../Components/ButtonLarge';

export default class IntroScreen extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <DottedLines />
        <PipImage />
        <PipTextLarge />
        <View style={styles.btn}>
          <ButtonLarge btn_text="Set up pip on your phone" />
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
});
