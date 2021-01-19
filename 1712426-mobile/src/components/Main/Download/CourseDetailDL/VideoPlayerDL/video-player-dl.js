import React, {useRef, useContext, useState} from 'react';
import Video from 'react-native-video';
import {StyleSheet, View} from 'react-native';
import { CourseContext } from '../../../../../provider/course-provider';
const VideoPlayerDL = (props) => {
  const courseContext = useContext(CourseContext);
  var urlVideo = courseContext.state.currentLocalUrlVideo;
  const viewVideo = () => {
    if (urlVideo != null) {
        return (
        <Video
            source={{uri: urlVideo}}
            style={styles.backgroundVideo}
            muted={true}
            repeat={true}
            resizeMode={'cover'}
            rate={1.0}
            ignoreSilentSwitch={'obey'}
            volume={100}
            muted={false}
            onChangeState={(event) => console.log('event', event)}
            onReady={() => console.log('ready')}
            onError={(e) => console.log('error', e)}
            playbackRate={1}
          />
        );
    }else{
      return (<View style={{height: 200}}/>)
    }
  };
  return <View style={styles.container}>{viewVideo()}</View>;
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f242a',
  },
  backgroundVideo: {
    height: 200,
    width: '100%',
  },
});
export default VideoPlayerDL;
