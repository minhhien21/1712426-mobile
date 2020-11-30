import React, {useState} from 'react';
import Video from 'react-native-video';
import {StyleSheet, View} from 'react-native';
const VideoPlayer = (props) => {
  return (

      <Video
        source={{uri: 'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1280_10MG.mp4'}}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f242a',
    flex: 1
  },
  backgroundVideo: {
    height: 200,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
});
export default VideoPlayer;
