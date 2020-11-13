import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ListCourses from '../ListCourses/list-courses';
const AllListCourses = (props) => {
  //props.navigation.state.params.title
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.navigation.state.params.title}</Text>
      <ListCourses {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
});
export default AllListCourses;
