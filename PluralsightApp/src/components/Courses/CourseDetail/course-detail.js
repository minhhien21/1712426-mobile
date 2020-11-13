import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import InfoCourse from './InfoCourse/info-course';
import ListLessons from './ListLessons/list-lessons';
const CourseDetail = (props) => {
  //let item = props.navigation.state.params.item;
  return (
    <View>
      <ScrollView>
      <InfoCourse {...props} />
      <ListLessons/>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({});
export default CourseDetail;
