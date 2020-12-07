import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import ListCourses from '../../Courses/ListCourses/list-courses';
import InfoPath from './InfoPath/info-path';
const PathDetail = (props) => {
  //let item = props.navigation.state.params.item;
  return (
    <View>
      <ScrollView>
        <InfoPath {...props} />
        <ListCourses {...props}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
export default PathDetail;
