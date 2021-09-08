import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import VisitorsLarge from '../../Components/VisitorsLarge';
import VisitorsSmall from '../../Components/VisitorsSmall';

export default class Visitors extends Component {
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
            dp={require('../../Assets/small_dp1.png')}
            clockTime="13:09"
          />
          <VisitorsSmall
            name="Jordyn Aminoff"
            flag={require('../../Assets/japan.png')}
            place="Osaka, Japan"
            dp={require('../../Assets/small_dp2.png')}
            clockTime="10:55"
          />
          <VisitorsSmall
            name="Kalyanram Anandram"
            flag={require('../../Assets/india.png')}
            place="Delhi, India"
            dp={require('../../Assets/small_dp3.png')}
            clockTime="09:09"
          />
          <VisitorsSmall
            name="Kaiya Rhiel Madsen"
            flag={require('../../Assets/USA.png')}
            place="Miami, US"
            dp={require('../../Assets/small_dp1.png')}
            clockTime="13:09"
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('VisitorsSettings');
            }}>
            <Image source={require('../../Assets/group.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Settings');
            }}>
            <Image source={require('../../Assets/settings.png')} />
          </TouchableOpacity>
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
