import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import InfoCourseDL from './InfoCourseDL/info-course-dl';
import InfoSectionRatingsDL from './InfoSectionRatingsDL/info-section-ratings-dl';
//import SectionCourses from '../../Home/SectionCourses/section-courses';
//import InfoSectionRatingsDL from './InfoSectionRatingsDL/info-section-ratings-dl';
//import VideoPlayerDL from './VideoPlayerDL/video-player-dl';
const CourseDetailDL = (props) => {
  //console.log("item:", props.navigation.state.params.item.course);
  return (
    <View style={styles.container}>
      <ScrollView>
        <InfoCourseDL {...props} dataCourse={props.navigation.state.params.item.course}/>
        <InfoSectionRatingsDL {...props} dataCourse={props.navigation.state.params.item.course}/>
      </ScrollView>
    </View>
  );
};
{/* <View style={styles.container}>
      <VideoPlayerDL />
      <ScrollView>
        <InfoCourseDL {...props} dataCourse={props.navigation.state.params.item.course}/>
        <SectionCourses title="Courses Like Category" data={courseContext.state.DetailCourse.payload.coursesLikeCategory} {...props}/>
        <InfoSectionRatingsDL />
      </ScrollView>
    </View> */}
const styles = StyleSheet.create({
  container:{
    flex : 1
  }
});
export default CourseDetailDL;
