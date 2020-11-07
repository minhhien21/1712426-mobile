import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ListCourses from '../../Courses/ListCourses/list-courses';
import InfoAuthor from './InfoAuthor/info-author';
const AuthorsDetail = (props) => {
  let item = props.route.params.item;
  return (
    <View>
      <ScrollView>
      <InfoAuthor {...props.route.params.item} />
        <ListCourses />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
export default AuthorsDetail;
