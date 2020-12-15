import React, {useContext,useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ListCourses from '../../../Courses/ListCourses/list-courses';
import ListAuthors from '../../../Authors/ListAuthors/list-authors';
import { CourseContext } from '../../../../provider/course-provider';
const Result = (props) => {
  const courseContext = useContext(CourseContext);
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#026f9b',
          inactiveTintColor: 'white',
          style: {
            backgroundColor: '#1f242a',
            borderTopColor: 'transparent',
          },
          tabStyle: {
            tabBarBackgroundColor: 'white',
            tabBarButtonColor: 'white',
            tabBarSelectedButtonColor: 'white',
            flexDirection: 'column',
          },
        }}>
        <Tab.Screen
          name="Courses"
          children={()=><ListCourses data={props.dataSearch.courses.data} {...props}/>}
        />
        <Tab.Screen name="Authors" children={()=> <ListAuthors data={props.dataSearch.instructors.data} {...props}/>} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
  },
  scrollView: {
    marginHorizontal: 15,
  },
});
export default Result;
