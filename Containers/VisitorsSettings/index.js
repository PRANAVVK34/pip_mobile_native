import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import VisitorsLarge from '../../Components/VisitorsLarge';
import VisitorsSmall from '../../Components/VisitorsSmall';
import VisitorsEmailSettings from '../../Components/VisitorsEmailSettings';

export default class VisitorsSettings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.visitorsHeading}>Visitors</Text>
        </View>
        <View style={styles.innerContainer}>
          <VisitorsLarge
            name="Kaiya Rhiel Madsen"
            time="11 minutes ago"
            dp={require('../../Assets/dp1.png')}
            flag={require('../../Assets/USA.png')}
            place="Miami, US"
            clockTime="13:09"
          />
          <VisitorsLarge
            name="Razia Al Akthar"
            time="21 minutes ago"
            dp={require('../../Assets/dp2.png')}
            flag={require('../../Assets/pakistan.png')}
            place="Lahore, Pakisthan"
            clockTime="12:48"
          />
          <VisitorsSmall
            name="Kaiya Rhiel Madsen"
            flag={require('../../Assets/USA.png')}
            place="Miami, US"
            dp={require('../../Assets/small_dp_square.png')}
            clockTime="13:09"
          />
          <VisitorsEmailSettings />
          <VisitorsSmall
            name="Kalyanram Anandram"
            flag={require('../../Assets/india.png')}
            place="Delhi, India"
            dp={require('../../Assets/small_dp3.png')}
            clockTime="09:09"
          />

          <VisitorsSmall
            name="Jordyn Aminoff"
            flag={require('../../Assets/japan.png')}
            place="Osaka, Japan"
            dp={require('../../Assets/small_dp2.png')}
            clockTime="10:55"
          />
        </View>
        <View style={styles.footer}>
          <Image source={require('../../Assets/group.png')} />
          <Image source={require('../../Assets/settings.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: '#F5F5F8',
  },
  visitorsHeading: {
    color: '#000000',
    fontSize: 18,
    lineHeight: 22,
    paddingVertical: 30,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 15,
  },
});
