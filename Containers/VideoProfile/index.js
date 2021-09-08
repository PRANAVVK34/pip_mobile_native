import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BackArrowText from '../../Components/BackArrowText';
import ButtonLarge from '../../Components/ButtonLarge';
import Avatar from '../../Components/Avatar';

export default class VideoProfile extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <BackArrowText text="Your Video Intro (5 seconds)" />
        <Avatar />
        <View>
          <ButtonLarge
            btn_text="Record Video"
            setupPip={() => {
              this.props.navigation.navigate('CamSection');
            }}
          />
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => {
              this.props.navigation.navigate('Visitors');
            }}>
            <Text style={styles.skip}>Skip this step</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
    justifyContent: 'space-between',
    margin: 10,
  },
  skip: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 18,
    textAlign: 'center',
    color: '#C4C4C4',
    marginTop: 10,
  },
});
