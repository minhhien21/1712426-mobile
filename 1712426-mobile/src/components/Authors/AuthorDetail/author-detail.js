import React, {useEffect, useContext} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import { InstructorContext } from '../../../provider/instructor-provider';
import ListCourses from '../../Courses/ListCourses/list-courses';
import InfoAuthor from './InfoAuthor/info-author';
const AuthorDetail = (props) => {
  //console.log("author-detail.js",props.navigation.state.params.id);
  const instructorContext = useContext(InstructorContext);
  instructorContext.state.isRequestedDetailInstructor = false;
  useEffect(() => {
    if (!instructorContext.state.isRequestedDetailInstructor) {
      instructorContext.requestDetailInstructor(props.navigation.state.params.id);
    }
  }, [instructorContext.state.isRequestedDetailInstructor]);
  const data = instructorContext.state.DetailInstructor.payload;
  return (
    <ScrollView style={styles.container}>
      <InfoAuthor {...props} data = {data}/>
      <ListCourses {...props} data={data.courses}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
});
export default AuthorDetail;
