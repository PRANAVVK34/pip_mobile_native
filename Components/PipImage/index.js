import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class PipImage extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.pip_container}>
        <Image
          source={require('../../Assets/pip_cat.png')}
          style={styles.pip_img}
        />
        <Image
          source={require('../../Assets/pip_img.png')}
          style={styles.pip_bgd}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pip_container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'absolute',
    top: '15%',
    left: 60,
  },
  pip_img: {
    position: 'absolute',
    width: 288,
    height: 188,
    zIndex: 10,
    marginTop: 20,
  },
  pip_bgd: {
    position: 'absolute',
    width: 256,
    height: 222,

    zIndex: 1,
  },
});
