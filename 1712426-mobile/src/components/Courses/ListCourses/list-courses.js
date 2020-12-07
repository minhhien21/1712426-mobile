import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ScreenKey} from '../../../globals/constants';
import ListCoursesItem from '../ListCoursesItem/list-courses-item';
const ListCourses = (props) => {
  const courses = [
    {
      id: 1,
      link: 'https://www.freecoursesonline.me/wp-content/uploads/2018/12/angular-fundamentals-v1.jpg',
      title: 'Angular Fundamentals',
      author: 'Joe Eames',
      level: 'Intermediate',
      released: 'Fed 01 2019',
      duration: '9h 35m',
    },
    {
      id: 2,
      link: 'https://www.freecoursesonline.me/wp-content/uploads/2018/12/angular-fundamentals-v1.jpg',
      title: 'C# Fundamentals',
      author: 'Scott Allen',
      level: 'Beginner',
      released: 'Apr 16 2019',
      duration: '6h 5m',
    },
    {
      id: 3,
      link: 'https://www.freecoursesonline.me/wp-content/uploads/2018/12/angular-fundamentals-v1.jpg',
      title: 'Managing AWS Operations',
      author: 'Andru Estes',
      level: 'Intermediate',
      released: 'May 15 2020',
      duration: '3h 50m',
    },
    {
      id: 4,
      link: 'https://www.freecoursesonline.me/wp-content/uploads/2018/12/angular-fundamentals-v1.jpg',
      title: 'Spring Framework: Spring MVC Fundamentals',
      author: 'Bryan Hansen',
      level: 'Beginner',
      released: 'Fed 12 2020',
      duration: '2h 32m',
    },
    {
      id: 5,
      link: 'https://www.freecoursesonline.me/wp-content/uploads/2018/12/angular-fundamentals-v1.jpg',
      title: 'Spring: The Big Picture',
      author: 'Dustin Schultz',
      level: 'Beginner',
      released: 'May 15 2018',
      duration: '1h 15m',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={({item}) => (
          <ListCoursesItem
            navigation={props.navigation}
            item={item}
            OnPressListenItem={() =>
              props.navigation.push(ScreenKey.CourseDetail, {item: item})
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0e0f13',
    flex: 1,
  },
});
export default ListCourses;
