import React, {useStaten, useContext,useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import { apiGetFreeCourses } from '../../../core/service/payment-service';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import { CourseContext } from '../../../provider/course-provider';
import InfoCourse from './InfoCourse/info-course';
import InfoSectionRatings from './InfoSectionRatings/info-section-ratings';
import VideoPlayer from './VideoPlayer/video-player';
const CourseDetail = (props) => {
  const authContext = useContext(AuthenticationContext);
  const price = props.navigation.state.params.item.price;
  if(parseInt(price) == 0){
    const res = apiGetFreeCourses(
      authContext.state.token,
      props.navigation.state.params.item.id
    );
    res
      .then((response) => {
      })
      .catch((error) => {
        Alert.alert(error.response.data.message);
        throw error;
      });
  }
  const courseContext = useContext(CourseContext);
  useEffect(() => {
    if (!courseContext.state.isRequestedDetail) {
      courseContext.requestDetailCourse(props.navigation.state.params.item.id, authContext.state.userInfo.id);
    }
  }, [courseContext.state.isRequestedDetail]);
  return (
    <ScrollView>
      <VideoPlayer />
      <InfoCourse {...props} />
      <InfoSectionRatings {...props}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default CourseDetail;
