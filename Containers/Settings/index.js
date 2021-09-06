import React, {Component} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import SettingsOptions from '../../Components/SettingsOption';

export default class PipConnect extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Settings</Text>

        <View style={styles.profile}>
          <View style={styles.profileContainer}>
            <Image source={require('../../Assets/settings_dp.png')} />
            <View style={styles.textField}>
              <Text style={styles.name}>Manoj Krishnapillai</Text>
              <Text style={styles.mobile}>+62 1309 - 1710 - 1920</Text>
            </View>
          </View>
          <Image source={require('../../Assets/arrow_front.png')} />
        </View>

        <SettingsOptions
          icons={require('../../Assets/settings_avatar.png')}
          options="Account"
        />
        <SettingsOptions
          icons={require('../../Assets/settings_video.png')}
          options="Intro Video"
        />
        <SettingsOptions
          icons={require('../../Assets/settings_sun.png')}
          options="Business Hours"
        />
        <SettingsOptions
          icons={require('../../Assets/settings_bell.png')}
          options="Notification"
        />
        <SettingsOptions
          icons={require('../../Assets/settings_privacy.png')}
          options="Privacy"
        />
        <SettingsOptions
          icons={require('../../Assets/settings_billing.png')}
          options="Billing"
        />
        <View
          style={{
            borderBottomColor: '#EDEDED',
            borderBottomWidth: 1,
            marginHorizontal: 20,
          }}
        />

        <SettingsOptions
          icons={require('../../Assets/settings_help.png')}
          options="Help"
        />
        <View style={styles.bottom_icons}>
          <Image source={require('../../Assets/group.png')} />
          <Image source={require('../../Assets/chat.png')} />
          <Image source={require('../../Assets/setting.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 30,
    marginLeft: 25,
    marginTop: 40,
    color: '#0F1828',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  name: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '600',
  },
  mobile: {
    color: '#ADB5BD',
    lineHeight: 28,
    fontSize: 14,
  },
  textField: {
    marginLeft: 10,
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  bottom_icons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: '75%',
  },
});
