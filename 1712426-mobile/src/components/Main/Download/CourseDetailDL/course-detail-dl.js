import React, {useEffect, useContext} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import InfoCourseDL from './InfoCourseDL/info-course-dl';
import InfoSectionRatingsDL from './InfoSectionRatingsDL/info-section-ratings-dl';
import VideoPlayerDL from './VideoPlayerDL/video-player-dl';
import { CourseContext } from '../../../../provider/course-provider';
import ListCourseLikeCategory from './ListCourseLikeCategory/list-course-like-category';
const CourseDetailDL = (props) => {
  //console.log("item:", props.navigation.state.params.item.course);
  const courseContext = useContext(CourseContext);
  ///data/user/0/com.pluralsightapp/files/IdCourse=486a0f3e-09f7-4b4d-a140-7cee4c60be41/PromoVidUrl
  courseContext.state.isRequestUrlLocalVideo = false;
  useEffect(() => {
    if (!courseContext.state.isRequestUrlLocalVideo) {
        courseContext.GetCurrentLocalURLVideo('/data/user/0/com.pluralsightapp/files/IdCourse='+ props.navigation.state.params.item.course.id + '/PromoVidUrl');
    }
  }, [courseContext.state.isRequestUrlLocalVideo]);
  //courseContext.state.currentLocalUrlVideo = '/data/user/0/com.pluralsightapp/files/IdCourse='+ props.navigation.state.params.item.course.id + '/PromoVidUrl';
  return (
    <View style={styles.container}>
      
      <VideoPlayerDL />
      <ScrollView>
        <InfoCourseDL
          {...props}
          dataCourse={props.navigation.state.params.item.course}
        />
        <ListCourseLikeCategory 
          {...props}
          title="Courses Like Category"
          dataCourse={props.navigation.state.params.item.course.coursesLikeCategory}
        />
        <InfoSectionRatingsDL
          {...props}
          dataCourse={props.navigation.state.params.item.course}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default CourseDetailDL;
