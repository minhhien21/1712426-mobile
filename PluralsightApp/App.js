import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import Login from './src/components/Authentication/Login/login';
import Register from './src/components/Authentication/Register/register';
import Browse from './src/components/Main/Browse/browse';
import Home from './src/components/Main/Home/home';
import Search from './src/components/Main/Search/search';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListCourses from './src/components/Courses/ListCourses/list-courses';
import CourseDetail from './src/components/Courses/CourseDetail/course-detail';
import ListLessons from './src/components/Courses/CourseDetail/ListLessons/list-lessons';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListCourses">
        <Stack.Screen name="ListCourses" component={ListCourses} />
        <Stack.Screen name="CourseDetail" component={CourseDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sizebutton: {
    height: 40,
    width: 40,
    marginLeft: 10,
  },
  boderbutton: {
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  square: {
    borderColor: 'black',
    borderWidth: 2,
    height: 120,
    width: 120,
  },
});
