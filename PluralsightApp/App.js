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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthorsDetail from './src/components/Authors/AuthorsDetail/authors-detail';
import ListAuthor from './src/components/Authors/ListAuthors/list-authors';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  const HomeStack = () => (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Search" children={createCoursesStack} />
    </Tab.Navigator>
  );
  const createCoursesStack = () => (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
      <Stack.Screen name="AuthorsDetail" component={AuthorsDetail} />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    
  );
  const createAuthorsStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="AuthorsDetail" component={AuthorsDetail} />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );

  return( 
  <NavigationContainer>
    {HomeStack()}
   
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
