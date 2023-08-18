import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Camera} from 'react-native-vision-camera';

const SearchScreen = () => {
  const onCamera = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    const microphonePermission = await Camera.getMicrophonePermissionStatus();

    console.log(cameraPermission);
  };
  const onPicture = () => {};
  return (
    <View>
      <Pressable onPress={onCamera}>
        <Text>사진촬영</Text>
      </Pressable>
      <Pressable onPress={onPicture}>
        <Text>사진선택</Text>
      </Pressable>
    </View>
  );
};

export default SearchScreen;
