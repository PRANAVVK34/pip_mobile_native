import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import BackArrowText from '../../Components/BackArrowText';
import Inputs from '../../Components/Inputs';
import ButtonLarge from '../../Components/ButtonLarge';

export default class NameProfile extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <BackArrowText text="Your Profile" />
        <View style={styles.inputs}>
          <Inputs placeholder="Manoj" style={styles.place} />
          <Inputs placeholder="Krishnapillai" style={styles.place} />
          <Inputs placeholder="m@shopper.com" style={styles.place} />
        </View>
        <ButtonLarge
          btn_text="Confirm"
          setupPip={() => {
            this.props.navigation.navigate('VideoProfile');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
    justifyContent: 'space-between',
    margin: 10,
  },
  inputs: {
    marginRight: 20,
    marginLeft: 20,
  },
});
