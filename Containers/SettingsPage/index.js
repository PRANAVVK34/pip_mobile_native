import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {Toggles, Toggle_monday} from '../../Components/Toggles';
import ButtonLarge from '../../Components/ButtonLarge';
import BusinessText from '../../Components/BusinessText';

export default class SettingsPage extends Component {
  componentDidMount() {}

  render() {
    this.day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return (
      <View style={styles.container}>
        <BusinessText />
        <Toggle_monday />
        <Toggles day={this.day[1]} />
        <Toggles day={this.day[2]} />
        <Toggles day={this.day[3]} />
        <Toggles day={this.day[4]} />
        <Toggles day={this.day[5]} />
        <Toggles day={this.day[6]} />

        <View style={styles.btn}>
          <ButtonLarge btn_text="Go Live" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  btn: {
    top: '10%',
  },
});
