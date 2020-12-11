import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import InfoCourse from './InfoCourse/info-course';
import InfoSectionRatings from './InfoSectionRatings/info-section-ratings';
import VideoPlayer from './VideoPlayer/video-player';
const CourseDetail = (props) => {
  //let item = props.navigation.state.params.item;
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
