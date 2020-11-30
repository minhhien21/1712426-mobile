import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import InfoCourse from './InfoCourse/info-course';
import ListLessons from './ListLessons/list-lessons';
import VideoPlayer from './VideoPlayer/video-player';
const CourseDetail = (props) => {
  //let item = props.navigation.state.params.item;
  return (
    <ScrollView>
      <VideoPlayer />
      <InfoCourse {...props} />
      <ListLessons />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default CourseDetail;
