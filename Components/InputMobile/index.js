import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Image} from 'react-native';

export default class InputMobile extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../Assets/flag.png')} style={styles.flag} />
        <TextInput style={styles.country_code} placeholder="+62" />

        <TextInput style={styles.number} placeholder="Phone Number" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    zIndex: 10,
    position: 'absolute',
    top: '50%',
    width: '90%',
    marginLeft: '5%',
  },
  country_code: {
    flex: 8,
    borderRadius: 4,
    backgroundColor: '#F7F7FC',
    color: '#ADB5BD',
    fontSize: 14,
    paddingLeft: 50,
  },
  number: {
    flex: 60,
    borderRadius: 4,
    backgroundColor: '#F7F7FC',
    marginLeft: 10,
    color: '#ADB5BD',
    fontSize: 14,
    paddingLeft: 20,
  },
  flag: {
    width: 24,
    height: 24,
    position: 'absolute',
    zIndex: 100,
    top: 10,
    left: 10,
  },
});
