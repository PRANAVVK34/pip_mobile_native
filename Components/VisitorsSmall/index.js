import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class VisitorsSmall extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={this.props.dp} style={styles.dp} />
        </View>
        <View style={styles.textField}>
          <Text style={styles.name}>{this.props.name}</Text>
          <View style={styles.inline}>
            <Image source={this.props.flag} style={styles.flag} />
            <Text style={styles.place}>{this.props.place}</Text>
          </View>
        </View>
        <View>
          <Text>{this.props.clockTime}</Text>
          <Image
            source={require('../../Assets/arrow_down.png')}
            style={styles.d_arrow}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    marginVertical: 10,
    borderRadius: 21,
    paddingVertical: 10,
  },
  dp: {
    width: 55,
    height: 55,
  },
  textField: {
    marginLeft: -60,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 34,
  },
  time: {
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 20,
    color: '#C4C4C4',
  },
  place: {
    fontSize: 14,
    lineHeight: 15,
  },
  flag: {
    width: 12,
    height: 12,
    marginRight: 10,
  },
  inline: {
    display: 'flex',
    flexDirection: 'row',
  },
  d_arrow: {
    marginLeft: 'auto',
    marginTop: 10,
  },
});
