import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ListCourses from '../ListCourses/list-courses';
const ViewListCourses = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.navigation.state.params.title}</Text>
      <ListCourses {...props} data={props.navigation.state.params.item} />
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
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 15,
    marginLeft: 25,
    marginBottom: 25,
  },
});
export default ViewListCourses;
