import React, {Component} from 'react';
import {StyleSheet, Text, View, Switch, Image} from 'react-native';

export class Toggles extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.day}</Text>
          <Text style={styles.text}>closed</Text>
          <Switch
            trackColor={{false: '#D1D1D1', true: '#007AFF'}}
            thumbColor="#FFFFFF"
          />
        </View>
      </>
    );
  }
}

export class Toggle_monday extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <View style={styles.enable}>
          <Text style={styles.text_enable}>Enable</Text>

          <Switch
            trackColor={{false: '#D1D1D1', true: '#007AFF'}}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.sub_container}>
          <Text style={styles.timezone_text}>Timezone</Text>
          <Text style={styles.timezone_text}>Asia/kolkata (UTC+05:30)</Text>
          <Image
            source={require('../../Assets/arrow_down.png')}
            style={styles.down_arrow}
          />
        </View>

        <Text style={styles.heading}>Weekly Schedule</Text>

        <View style={styles.sub_container}>
          <Text style={styles.text_monday}>Mon</Text>
          <Text style={styles.text_time}>
            07:00 am
            <Image source={require('../../Assets/arrow_down.png')} />
          </Text>
          <Image
            source={require('../../Assets/arrows.png')}
            style={styles.arrows}
          />
          <Text style={styles.text_time}>
            05:00 pm
            <Image source={require('../../Assets/arrow_down.png')} />
          </Text>

          <Switch
            trackColor={{false: '#D1D1D1', true: '#007AFF'}}
            thumbColor="#FFFFFF"
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },

  sub_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  arrows: {
    width: 13,
    height: 13,
    marginTop: 5,
  },
  text_time: {
    color: '#77838F',
    letterSpacing: 0.84715,
    fontSize: 11.8601,
    lineHeight: 20,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#0F1828',
    marginVertical: 50,
  },
  timezone_text: {
    fontWeight: '600',
    fontSize: 14,
  },
  enable: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },

  down_arrow: {
    marginTop: 8,
    marginRight: 10,
  },
});
