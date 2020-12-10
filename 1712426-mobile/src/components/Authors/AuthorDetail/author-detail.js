import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ListCourses from '../../Courses/ListCourses/list-courses';
import InfoAuthor from './InfoAuthor/info-author';
const AuthorDetail = (props) => {
  console.log(props, 'props');
  //let item = props.navigation.state.params.item;
  return (
    <ScrollView style={styles.container}>
      <InfoAuthor {...props} />
      <ListCourses {...props} data={props.navigation.state.params.item.courses}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
});
export default AuthorDetail;
