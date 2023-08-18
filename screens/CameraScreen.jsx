import React from 'react';

import {StyleSheet, Text} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const CameraScreen = () => {
  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;

  if (device == null) {
    return <Text>hiasas</Text>;
  }
  return <Camera style={styles.absoluteFill} device={device} />;
};

const styles = StyleSheet.create({
  absoluteFill: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
});

export default CameraScreen;
