import React, {useRef, useContext, useState, useEffect} from 'react';
import Video from 'react-native-video';
import {StyleSheet, View} from 'react-native';
import {CourseContext} from '../../../../provider/course-provider';
import YoutubePlayer from 'react-native-youtube-iframe';
const VideoPlayer = (props) => {
  const courseContext = useContext(CourseContext);
  var urlVideo = courseContext.state.currentUrlVideo;
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const viewVideo = () => {
    if (urlVideo != null) {
      if (String(urlVideo).indexOf('https://www.youtube.com') == 0) {
        const videoYoutubeId = String(urlVideo).split('?v=');
        return (
          <YoutubePlayer
            ref={playerRef}
            height={200}
            videoId={videoYoutubeId[videoYoutubeId.length - 1]}
            play={playing}
            onChangeState={(event) => console.log('onChangeState', event)}
            onReady={() => console.log('onReady')}
            onError={(e) => console.log('onError', escape)}
            onPlaybackQualityChange={(q) =>
              console.log('onPlaybackQualityChange', q)
            }
            volume={50}
            playbackRate={1}
          />
        );
      } else if (
        String(urlVideo).indexOf('.mov') ==
        String(urlVideo).length - 4
      ) {
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
      } else if (
        String(urlVideo).indexOf('.mp4') ==
        String(urlVideo).length - 4
      ) {
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
      }
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
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
});
export default VideoPlayer;
