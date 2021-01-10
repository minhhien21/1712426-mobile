import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import { apiLessonDetail } from '../../../../../../core/service/lesson-service';
import { CourseContext } from '../../../../../../provider/course-provider';
import { AuthenticationContext } from '../../../../../../provider/authentication-provider';
const LessonItem = (props) => {
  const hour = parseInt(props.itemList.hours);
  const convertMinute = 60 * (props.itemList.hours - hour);
  const minute = parseInt(convertMinute);
  const convertSecond = 60 * (convertMinute - minute);
  const second = parseInt(convertSecond);
  const viewToTalTime = () => {
    if (hour == 0) {
      if (minute < 10 && second < 10) {
        return <Text style={styles.darktext}>{`0${minute}:0${second}`}</Text>;
      } else if (minute < 10) {
        return <Text style={styles.darktext}>{`0${minute}:${second}`}</Text>;
      } else if (second < 10) {
        return <Text style={styles.darktext}>{`${minute}:0${second}`}</Text>;
      } else {
        return <Text style={styles.darktext}>{`${minute}:${second}`}</Text>;
      }
    } else if (hour < 10 && hour != 0) {
      if (minute < 10 && second < 10) {
        return <Text style={styles.darktext}>{`0${hour}:0${minute}:0${second}`}</Text>;
      } else if (minute < 10) {
        return <Text style={styles.darktext}>{`0${hour}:0${minute}:${second}`}</Text>;
      } else if (second < 10) {
        return <Text style={styles.darktext}>{`0${hour}:${minute}:0${second}`}</Text>;
      } else {
        return <Text style={styles.darktext}>{`0${hour}:${minute}:${second}`}</Text>;
      }
    } else {
      if (minute < 10 && second < 10) {
        return <Text style={styles.darktext}>{`${hour}:0${minute}:0${second}`}</Text>;
      } else if (minute < 10) {
        return <Text style={styles.darktext}>{`${hour}:0${minute}:${second}`}</Text>;
      } else if (second < 10) {
        return <Text style={styles.darktext}>{`${hour}:${minute}:0${second}`}</Text>;
      } else {
        return <Text style={styles.darktext}>{`${hour}:${minute}:${second}`}</Text>;
      }
    }
  };
  const authContext = useContext(AuthenticationContext);
  const token = authContext.state.token;
  const courseContext = useContext(CourseContext);
  const onPressChangeUrlVideo = () => {
    const res = apiLessonDetail(token, props.itemList.courseId, props.itemList.id);
      res.then((response) => {
        courseContext.GetCurrentURLVideo(response.data.payload.videoUrl);
        })
        .catch((error) => {
          Alert.alert(error.response.data.message)
          throw error;
        });
    //courseContext.GetCurrentURLVideo(props.itemList.videoUrl);
  }
  return (
    <TouchableOpacity style={styles.item} onPress={onPressChangeUrlVideo}>
      <Text style={styles.text}>{props.itemList.name}</Text>
      {viewToTalTime()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  text: {
    color: 'white',
  },
  darktext: {
    color: 'darkgray',
  },
});
export default LessonItem;
