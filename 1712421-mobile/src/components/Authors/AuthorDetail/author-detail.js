import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ListCourses from '../../Courses/ListCourses/list-courses';
import InfoAuthor from './InfoAuthor/info-author';
const AuthorDetail = (props) => {
  console.log(props, 'props');
  //let item = props.navigation.state.params.item;
  return (
    <View>
      <ScrollView>
        <InfoAuthor {...props} />
        <ListCourses {...props} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
export default AuthorDetail;
