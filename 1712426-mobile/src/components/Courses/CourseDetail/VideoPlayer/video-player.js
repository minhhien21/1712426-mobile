import React, {useContext} from 'react';
import Video from 'react-native-video';
import {StyleSheet, View} from 'react-native';
import { CourseContext } from '../../../../provider/course-provider';
const VideoPlayer = (props) => {
  //const courseContext = useContext(CourseContext);
  //const promoVidUrl = courseContext.state.DetailCourse.payload.promoVidUrl;
  const promoVidUrl  = props.promoVidUrl;
  console.log("video-player.js",promoVidUrl);
  return (
      <Video
        source={{uri: promoVidUrl}}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
        volume={100}
        muted = {false}
        onChangeState={event => console.log('event', event)}
        onReady={()=> console.log('ready')}
        onError={e=> console.log('error',e)}
        playbackRate={1}
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
