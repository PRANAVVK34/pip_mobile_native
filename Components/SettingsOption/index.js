import React, {Component} from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

export default class SettingsOptions extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left_align}>
          <Image source={this.props.icons} />
          <Text style={styles.text}>{this.props.options}</Text>
        </View>
        <Image
          source={require('../../Assets/arrow_front.png')}
          style={styles.right_arrow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  left_align: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 24,
  },
});
