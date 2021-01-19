import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {apiGetFreeCourses} from '../../../core/service/payment-service';
import {AuthenticationContext} from '../../../provider/authentication-provider';
import {CourseContext} from '../../../provider/course-provider';
import {InstructorContext} from '../../../provider/instructor-provider';
import SectionCourses from '../../Main/Home/SectionCourses/section-courses';
import InfoCourse from './InfoCourse/info-course';
import InfoSectionRatings from './InfoSectionRatings/info-section-ratings';
import VideoPlayer from './VideoPlayer/video-player';
const CourseDetail = (props) => {
  const authContext = useContext(AuthenticationContext);
  const price = props.navigation.state.params.item.price;
  if (parseInt(price) == 0) {
    const res = apiGetFreeCourses(
      authContext.state.token,
      props.navigation.state.params.item.id,
    );
    res
      .then((response) => {})
      .catch((error) => {
        Alert.alert(error.response.data.message);
        throw error;
      });
  }
  const courseContext = useContext(CourseContext);
  courseContext.state.isRequestedDetail = false;
  useEffect(() => {
    if (!courseContext.state.isRequestedDetail) {
      courseContext.requestDetailCourse(
        props.navigation.state.params.item.id,
        authContext.state.userInfo.id,
      );
    }
  }, [courseContext.state.isRequestedDetail]);
  
  const instructorContext = useContext(InstructorContext);
  instructorContext.state.isRequestedDetailInstructor = false;
  useEffect(() => {
    if (!instructorContext.state.isRequestedDetailInstructor) {
      instructorContext.requestDetailInstructor(props.navigation.state.params.item.instructorId);
    }
  }, [instructorContext.state.isRequestedDetailInstructor]);

  // const instructorContext = useContext(InstructorContext);
  // instructorContext.state.isRequestedDetailInstructor = false;
  // useEffect(() => {
  //   if (!instructorContext.state.isRequestedDetailInstructor
  //      && courseContext.state.isRequestedDetail) {
  //     instructorContext.requestDetailInstructor(courseContext.state.DetailCourse.payload.instructorId);
  //   }
  // }, [instructorContext.state.isRequestedDetailInstructor]);
  courseContext.state.isRequestUrlVideo = false;
  useEffect(() => {
    if (!courseContext.state.isRequestUrlVideo) {
        courseContext.GetCurrentURLVideo(props.navigation.state.params.item.promoVidUrl);
    }
  }, [courseContext.state.isRequestUrlVideo]);
  return (
    <View style={styles.container}>
      <VideoPlayer />
      <ScrollView>
        <InfoCourse {...props}/>
        <SectionCourses title="Courses Like Category" data={courseContext.state.DetailCourse.payload.coursesLikeCategory} {...props}/>
        <InfoSectionRatings />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex : 1
  }
});
export default CourseDetail;
