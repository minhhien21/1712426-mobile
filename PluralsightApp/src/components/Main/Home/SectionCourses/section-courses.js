import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ScreenKey } from '../../../../globals/constants';
import FlatListCourses from '../../../Common/flatlist-courses';
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item';
const SectionCourses = (props) => {
  const courses = [
    {
      id: 1,
      link: require('../../../../../assets/angular-fundamentals.jpg'),
      title: 'Angular Fundamentals',
      author: 'Joe Eames',
      level: 'Intermediate',
      released: 'Fed 01 2019',
      duration: '9h 35m',
    },
    {
      id: 2,
      link: require('../../../../../assets/angular-fundamentals.jpg'),
      title: 'C# Fundamentals',
      author: 'Scott Allen',
      level: 'Beginner',
      released: 'Apr 16 2019',
      duration: '6h 5m',
    },
    {
      id: 3,
      link: require('../../../../../assets/angular-fundamentals.jpg'),
      title: 'Managing AWS Operations',
      author: 'Andru Estes',
      level: 'Intermediate',
      released: 'May 15 2020',
      duration: '3h 50m',
    },
    {
      id: 4,
      link: require('../../../../../assets/angular-fundamentals.jpg'),
      title: 'Spring Framework: Spring MVC Fundamentals',
      author: 'Bryan Hansen',
      level: 'Beginner',
      released: 'Fed 12 2020',
      duration: '2h 32m',
    },
    {
      id: 5,
      link: require('../../../../../assets/angular-fundamentals.jpg'),
      title: 'Spring: The Big Picture',
      author: 'Dustin Schultz',
      level: 'Beginner',
      released: 'May 15 2018',
      duration: '1h 15m',
    },
  ];
  const onPressListCourses = () =>{
    props.navigation.push(ScreenKey.AllListCourses,{
        title:props.title,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.textHeader}>{props.title}</Text>
        <TouchableOpacity onPress={onPressListCourses}>
          <Text style={styles.text}>See all{'>'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={courses} horizontal={true}
      renderItem={({item}) => (
        <SectionCoursesItem
          navigation={props.navigation}
          item={item}
          OnPressListenItem={() =>
            props.navigation.push(ScreenKey.CourseDetail, {item: item})
          }
        />
      )}/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 25,
      marginBottom: 10,
  },
  textHeader: {
    color: 'white',
    fontSize: 20,
  },
  text: {
    color: 'darkgray',
    alignSelf: 'center'
  },
});
export default SectionCourses;
