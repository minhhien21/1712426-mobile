import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import InfoCourse from './InfoCourse/info-course';
import ListLessons from './ListLessons/list-lessons';
const CourseDetail = (props) => {
  let item = props.route.params.item;
  console.log(props);
  console.log(item, 'item');
  return (
    <View>
      <ScrollView>
      <InfoCourse {...props.route.params.item} />
      <ListLessons/>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({});
export default CourseDetail;
