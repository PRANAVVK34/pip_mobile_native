import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class VisitorsLarge extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={this.props.dp} style={styles.dp} />
        </View>
        <View style={styles.textField}>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text style={styles.time}>{this.props.time}</Text>
          <View style={styles.inline}>
            <Image source={this.props.flag} style={styles.flag} />
            <Text style={styles.place}>{this.props.place}</Text>
          </View>
        </View>
        <View>
          <Text>{this.props.clockTime}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    width: '90%',
    marginHorizontal: '10%',
    marginVertical: 10,
    borderRadius: 21,
    paddingVertical: 15,
  },
  dp: {
    width: 80,
    height: 82,
  },
  textField: {
    marginLeft: -30,
  },
  name: {
    fontFamily: 'SF Pro Rounded',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
  },
  time: {
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 20,
    color: '#C4C4C4',
  },
  place: {
    fontSize: 15,
    lineHeight: 19,
  },
  flag: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  inline: {
    display: 'flex',
    flexDirection: 'row',
  },
});
