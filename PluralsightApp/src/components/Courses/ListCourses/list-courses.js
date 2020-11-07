import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ListCoursesItem from '../ListCoursesItem/list-courses-item';
const ListCourses = (props) => {
  const courses = [
    {
      id: 1,
      link: require('../../../../assets/angular-fundamentals.jpg'),
      title: 'Angular Fundamentals',
      author: 'Joe Eames',
      level: 'Intermediate',
      released: 'Fed 01 2019',
      duration: '9h 35m',
    },
    {
      id: 2,
      link: require('../../../../assets/angular-fundamentals.jpg'),
      title: 'C# Fundamentals',
      author: 'Scott Allen',
      level: 'Beginner',
      released: 'Apr 16 2019',
      duration: '6h 5m',
    },
    {
      id: 3,
      link: require('../../../../assets/angular-fundamentals.jpg'),
      title: 'Managing AWS Operations',
      author: 'Andru Estes',
      level: 'Intermediate',
      released: 'May 15 2020',
      duration: '3h 50m',
    },
    {
      id: 4,
      link: require('../../../../assets/angular-fundamentals.jpg'),
      title: 'Spring Framework: Spring MVC Fundamentals',
      author: 'Bryan Hansen',
      level: 'Beginner',
      released: 'Fed 12 2020',
      duration: '2h 32m',
    },
  ];

  return (
    <View style={styles.container}> 
      <Text style={styles.text}>Courses</Text>
      <FlatList data={courses} 
      renderItem={({item}) => <ListCoursesItem navigation={props.navigation} item={item} />} />
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
export default ListCourses;
